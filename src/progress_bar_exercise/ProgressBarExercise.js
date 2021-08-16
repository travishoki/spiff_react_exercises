import React, { useState } from "react";
import Exercise from "../exercise/Exercise";

import ProgressBar from './ProgressBar/ProgressBar';
import Button from './Button/Button';

import useProgressLoader from './utils/useProgressLoader';

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

const INTERVAL = 100;

const Solution = () => {
  const [ isLoading, setILoading ] = useState(false);
  const [ percentLoaded, setPercentLoaded ] = useState(0);

  const { startLoader } = useProgressLoader(setPercentLoaded);

  const startRequest = () => {
    startLoader({
      duration: 1500,
      from: 0,
      interval: INTERVAL,
      to: 90,
    });
    setILoading(true);
  };

  const finishRequest = () => {
    startLoader({
      duration: 1000,
      from: percentLoaded,
      interval: INTERVAL,
      to: 100,
      callback: () => setILoading(false),
    });
  };

  return (
    <div>
      <ProgressBar
        percent={percentLoaded}
      />

      <Button
            onClick={startRequest}
            text={isLoading ? 'Loading...' : 'Start Request'}
        />

      {isLoading && (
        <Button
          onClick={finishRequest}
          text="Finish Request"
        />
        )}
    </div>
  );
};
