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
            
            distance: {
                type: Number,
                trim: true
            },

            duration: {
                type: Number,
                required: "enter the duration of excercise"
            },
            

            weight: {
                type: Number,
                trim: true
            },
            
            sets: {
                type: Number,
                trim: true
            },

            reps: {
                type: Number,
                trim: true
            }
        }, {
            toJSON: {
                virtuals: true
            }
        }]

});

//will dynamically add a property to schema
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
