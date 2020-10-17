const router = require("express").Router();
const Workout = require("../models/workout.js");

//get last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//create workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({excercises: req.body})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get range of workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//add excercises to workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
        {
            _id: req.params.id
        }, 
        {
            $push: {exercises: req.body}, 
            new: true
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;