import Joi from "joi";

const dishValidation = (body) => {
    const validationSchema = Joi.object({
        name: Joi.string().required(),
        preparation_time: Joi.string().required(),
        type: Joi.string().required(),
        no_of_slices: Joi.number(),
        diameter: Joi.number(),
        spiciness_scale: Joi.number(),
        slices_of_bread: Joi.number()
    });

    return validationSchema.validate(body);
}

export default dishValidation;
