import React, { useState } from "react";

import ProgressBar from './ProgressBar/ProgressBar';
import Button from './Button/Button';

import useDelay from './utils/useDelay';
import useAnimateValue from './utils/useAnimateValue';

const INTERVAL = 100;

const Solution = () => {
  const [ hasClickedFinish, setHasClickedFinish ] = useState(false);
  const [ isComplete, setIsComplete ] = useState(false);
  const [ isLoading, setILoading ] = useState(false);
  const [ isProgressBarVisible, setIsProgressBarVisible ] = useState(false);
  const [ percentLoaded, setPercentLoaded ] = useState(0);

  // Custom hook for delaying a callback
  const { startDelay } = useDelay(setPercentLoaded);
  // Custom hook for animating a value
  const { startAnimate } = useAnimateValue();

  const startRequest = () => {
    setILoading(true);
    setIsProgressBarVisible(true);

    startAnimate({
      duration: 15000,
      from: 0,
      interval: INTERVAL,
      to: 90,
      intervalCallback: setPercentLoaded, // This callback will update the loader progress
    });
  };

  const finishRequest = () => {
    setHasClickedFinish(true);

    startAnimate({
      duration: 1000,
      from: percentLoaded,
      interval: INTERVAL,
      to: 100,
      intervalCallback: setPercentLoaded, // This callback will update the loader progress
      callback: () => {
        setIsComplete(true);
        setILoading(false);

        startDelay(3000, () => { // After 3 seconds make the progress bar disapear
          setIsProgressBarVisible(false)
          startDelay(500, resetLoader);
        });
      },
    });
  };

  const resetLoader = () => {
    // Reseting local state so the progress bar functions can be called again
    setHasClickedFinish(false);
    setIsComplete(false);
  };

  return (
    <div>
      <ProgressBar
        isVisible={isProgressBarVisible}
        percent={percentLoaded}
      />

      {!isComplete && (
        <Button
          disabled={isLoading}
          onClick={startRequest}
          text={isLoading ? 'Loading...' : 'Start Request'}
        />
      )}

      {isLoading && !hasClickedFinish && (
        <Button
          onClick={finishRequest}
          text="Finish Request"
          type="danger"
        />
        )}
    </div>
  );
};

export default Solution;
