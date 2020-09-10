const router = require("express").Router();
const { Workout } = require("../models");

function pastWeek() {
  return (Date.now() - 7 * 24 * 60 * 60 * 1000)
};

router.get("/api/workouts/range", (req, res) => {
  Workout.find({ day: { $gte: pastWeek() } }) // finds workouts within the past week | gte = greater than or equal to
    .sort({ day: 1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  // console.log("this is the get route");
  Workout
    .find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  // console.log("this is the post body: ", req.body);
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  // console.log("this is the put route", req.body);
  Workout.findOneAndUpdate(
    { _id: req.params.id }, // filter
    { $push: { exercises: req.body } },  // update
    { upsert: true, useFindandModify: false }) // options
    .then(updatedWorkout => {
      res.json(updatedWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;