const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  sets: {
    type: Number,
    required: "Enter sets"
  },
  reps: {
    type: Number,
    required: "Enter reps"
  },
  distance: {
    type: Number,
    required: "Enter a distance"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout"
  }
})

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
