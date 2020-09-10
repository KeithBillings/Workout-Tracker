const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  distance: {
    type: Number
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout"
  }
})

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema]
},
  { toJSON: { virtuals: true } }
);

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((totalSum, current) => totalSum + current.duration, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
