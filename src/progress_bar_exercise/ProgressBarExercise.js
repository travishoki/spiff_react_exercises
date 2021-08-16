import React, { useEffect, useState } from "react";
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
  const [ timer, setTimer ] = useState();

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [ timer ]);

  const startRequest = () => {
    setILoading(true);

    const LOADING_DURATION = 15000;
    const INTERVAL = 100;
    const GOAL_PERC = .9;
    const PROGRESS_PER_TICK = INTERVAL / LOADING_DURATION * GOAL_PERC * 100;

    let progress = 0;
    let time = 0;

    setPercentLoaded(0);

    const newTimer = setInterval(() => {
      progress += PROGRESS_PER_TICK;
      setPercentLoaded(progress);

      time += INTERVAL;

      if (time >= LOADING_DURATION || progress >= 100 * GOAL_PERC) {
        clearInterval(newTimer);
      }
    }, INTERVAL);

    setTimer(newTimer);
  };

  const finishRequest = () => {
    setILoading(false);
    setPercentLoaded(100);
    clearInterval(timer);
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
