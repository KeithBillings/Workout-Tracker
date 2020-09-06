const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  distance: {
    type: Number,
    required: "Enter a distance"
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  sets: {
    type: Number,
    required: "Enter sets"
  },
  reps: {
    type: Number,
    required: "Enter reps"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
