import { useEffect, useState } from "react";

/*
Custom Hook:
- Animates a value and returns the current value using a callback
- Clears the interval when the component unmounts
- Reusable
*/

const useAnimateValue = () => {
  const [ timer, setTimer ] = useState();

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [ timer ]);

  const startAnimate = ({
    callback,
    duration,
    from,
    interval,
    intervalCallback,
    to,
  }) => {
    clearTimer();
    const VALUE_DIFF = to - from;
    const TICK_COUNT = duration / interval;
    const PROGRESS_PER_TICK = VALUE_DIFF / TICK_COUNT;

    let currentValue = from;
    let currentTime = 0;

    intervalCallback(from);

    const newTimer = setInterval(() => {
      const diff = to - currentValue;

      if (diff < PROGRESS_PER_TICK) {
        currentValue = to;
      } else {
        currentValue += PROGRESS_PER_TICK;
      }
      intervalCallback(currentValue);

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
    startAnimate,
  };
};

export default useAnimateValue;
