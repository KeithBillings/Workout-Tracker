const router = require("express").Router();
const {Workout} = require("../models");

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
  // .limit(1).sort({ $natural: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  // console.log(req.params.id);
  Workout.findOneAndUpdate({ _id: req.params.id },
    { $push: { excercises: req.body } },
    { upsert: true, useFindandModify: false },
    updatedWorkout => {
      res.json(updatedWorkout);
    })
});

module.exports = router;