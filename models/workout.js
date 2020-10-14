const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "enter type of workout"
            },

            name: {
                type: String,
                trim: true,
                required: "enter a name of workout"
            },

            duration: {
                type: Number
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type:Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
