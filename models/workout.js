const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

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
                type: Number
            },

            distance: {
                type: Number
            }
        }, {
            toJSON: {
                virtuals: true
            }
        }]

});

//will dynamically add a schema
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        //console.log(this.exercises)
        return total + exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
