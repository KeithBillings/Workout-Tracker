const router = require("express").Router();
const { Workout } = require("../models");

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
  console.log("this is the get route");
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
  console.log("this is the post body: ", body);
  Workout.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("this is the put route", req.body);
  Workout.findOneAndUpdate(
    { _id: req.params.id }, // filter
    { $push: { excercises: req.body } },  // update
    { upsert: true, useFindandModify: false }, // options
    (updatedWorkout) => {
      res.json(updatedWorkout);
    })
});

module.exports = router;