import React, { useState } from "react";

import ProgressBar from './ProgressBar/ProgressBar';
import Button from './Button/Button';

import useDelay from './utils/useDelay';
import useProgressLoader from './utils/useProgressLoader';

const INTERVAL = 100;

const Solution = () => {
  const [ hasClickedFinish, setHasClickedFinish ] = useState(false);
  const [ isComplete, setIsComplete ] = useState(false);
  const [ isLoading, setILoading ] = useState(false);
  const [ isProgressBarVisible, setIsProgressBarVisible ] = useState(false);
  const [ percentLoaded, setPercentLoaded ] = useState(0);

  const { startDelay } = useDelay(setPercentLoaded);
  const { startLoader } = useProgressLoader();

  const startRequest = () => {
    setILoading(true);
    setIsProgressBarVisible(true);

    startLoader({
      duration: 15000,
      from: 0,
      interval: INTERVAL,
      to: 90,
      intervalCallback: setPercentLoaded,
    });
  };

  const finishRequest = () => {
    setHasClickedFinish(true);

    startLoader({
      duration: 1000,
      from: percentLoaded,
      interval: INTERVAL,
      to: 100,
      intervalCallback: setPercentLoaded,
      callback: () => {
        setIsComplete(true);
        setILoading(false);

        startDelay(3000, () => {
          setIsProgressBarVisible(false)
          startDelay(500, resetLoader);
        });
      },
    });
  };

  const resetLoader = () => {
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
          onClick={startRequest}
          disabled={isLoading}
          text={isLoading ? 'Loading...' : 'Start Request'}
        />
      )}

      {isLoading && !hasClickedFinish && (
        <Button
          onClick={finishRequest}
          text="Finish Request"
        />
        )}
    </div>
  );
};

export default Solution;
