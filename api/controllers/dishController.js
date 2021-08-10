import Dish from '../models/dish';
import dishValidation from "../utils/dishValidationSchema";
import convert from "../services/mongoConverter";

const dishController = {
    getAllDishes: async (req, res) => {
        try {
            const dishes = await Dish.find();

            res.status(200).send(convert(dishes));
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createDish: async (req, res) => {
        const {body} = req;
        const {error} = dishValidation(body);
        if (error) {
            res.status(401).send({errorCode: 401, errorMessage: error.details[0].message});
        } else {
            const newDish = new Dish(body);
            try {
                await newDish.save();
            } catch (error) {
                res.status(500).send('Cannot create new dish. ' + error);
            }

            res.status(201).send(convert(newDish));
        }
    },
    updateDish: async (req, res) => {
        const {id} = req.params;
        const {body} = req;
        const dish = await Dish.exists({_id: id});
        if (!dish) {
            res.status(401).send({errorCode: 401, errorMessage: 'Dish not found.'});
        } else {
            const {error} = dishValidation(body);
            if (error) {
                res.status(401).send({errorCode: 401, errorMessage: error.details[0].message});
            } else {
                const newDish = await Dish.findOneAndUpdate({_id: id}, body, {new: true});
                if (!newDish) {
                    res.status(500).send('Cannot update dish.');
                } else {
                    res.status(200).send(convert(newDish));
                }
            }
        }
    },
    deleteDish: async (req, res) => {
        const {id} = req.params;

        const removedDish = await Dish.findByIdAndRemove(id);

        if (!removedDish) {
            res.status(400).send('Could not delete dish.');
        } else {
            res.status(204).send('Deleted dish successfully.');
        }
    }
};

export default dishController;
