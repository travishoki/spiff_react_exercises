import React, { useState } from "react";
import Exercise from "../exercise/Exercise";

import ProgressBar from './ProgressBar/ProgressBar';
import Button from './Button/Button';

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  const [ isLoading, setILoading ] = useState(false);
  const [ percentLoaded, setPercentLoaded ] = useState(0);

  const startRequest = () => {
    setILoading(true);
    setPercentLoaded(0);
  };

  const finishRequest = () => {
    setILoading(false);
  };

  return (
    <div>
      <ProgressBar
        percentLoaded={percentLoaded}
      />

      <Button
            onClick={startRequest}
            text={isLoading ? 'Loading...' : 'Start Request'}
        />

      <Button
          onClick={finishRequest}
          text="Finish Request"
      />
    </div>
  );
};
