import React from "react";
import Exercise from "../exercise/Exercise";

import Solution from './Solution/Solution';

const ProgressBarExercise = () => (
  <div className="progress-bar-exercise">
    <Exercise
      solution={<Solution />}
      specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
      title="Progress Bar Exercise"
    />
  </div>
);

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

// Solution imported as a Component