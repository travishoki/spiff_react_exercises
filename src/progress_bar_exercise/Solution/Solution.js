import React, { useState } from "react";

import ProgressBar from './ProgressBar/ProgressBar';
import Button from './Button/Button';

import useProgressLoader from './utils/useProgressLoader';

const INTERVAL = 100;

const Solution = () => {
  const [ isLoading, setILoading ] = useState(false);
  const [ percentLoaded, setPercentLoaded ] = useState(0);
  const [ hasClickedFinish, setHasClickedFinish ] = useState(false);
  const [ isProgressBarVisible, setIsProgressBarVisible ] = useState(false);

  const { startLoader } = useProgressLoader(setPercentLoaded);

  const startRequest = () => {
    setILoading(true);
    setIsProgressBarVisible(true);

    startLoader({
      duration: 1500,
      from: 0,
      interval: INTERVAL,
      to: 90,
    });
  };

  const finishRequest = () => {
    setHasClickedFinish(true);

    startLoader({
      duration: 1000,
      from: percentLoaded,
      interval: INTERVAL,
      to: 100,
      callback: () => {
        setILoading(false);
        setHasClickedFinish(false);
        setIsProgressBarVisible(false);
      },
    });
  };

  return (
    <div>
      <ProgressBar
        isVisible={isProgressBarVisible}
        percent={percentLoaded}
      />

      <Button
        onClick={startRequest}
        disabled={isLoading}
        text={isLoading ? 'Loading...' : 'Start Request'}
      />

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
