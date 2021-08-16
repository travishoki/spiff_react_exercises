import { useEffect, useState } from "react";

const useProgressLoader = (setPercentCallback) => {
  const [ timer, setTimer ] = useState();

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [ timer ]);

  const startLoader = ({
    callback,
    duration,
    from,
    interval,
    to,
  }) => {
    clearTimer();
    const VALUE_DIFF = to - from;
    const TICK_COUNT = duration / interval;
    const PROGRESS_PER_TICK = VALUE_DIFF / TICK_COUNT;

    let currentValue = from;
    let currentTime = 0;

    setPercentCallback(from);

    const newTimer = setInterval(() => {
      const diff = to - currentValue;

      if (diff < PROGRESS_PER_TICK) {
        currentValue = to;
      } else {
        currentValue += PROGRESS_PER_TICK;
      }
      setPercentCallback(currentValue);

      currentTime += interval;

      if (currentTime >= duration || currentValue >= to) {
        clearInterval(newTimer);
        callback && callback();
      }
    }, interval);

    setTimer(newTimer);
  };

  const clearTimer = () => {
    if (timer) clearInterval(timer);
  };

  return {
    startLoader,
  };
};

export default useProgressLoader;
