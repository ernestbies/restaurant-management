import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const dishSchema = new Schema({
    name: {type: String, required: true},
    preparation_time: {type: String, required: true},
    type: {type: String, required: true},
    no_of_slices: {type: Number, required: false},
    diameter: {type: Number, required: false},
    spiciness_scale: {type: Number, required: false},
    slices_of_bread: {type: Number, required: false}
});

dishSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dish', dishSchema);
