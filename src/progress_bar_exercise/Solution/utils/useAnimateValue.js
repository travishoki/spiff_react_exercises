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
      clearInterval(timer); // Clear the interval when unmounting
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
    const TICK_COUNT = duration / interval; // Amount of ticket to get to the value goal
    const PROGRESS_PER_TICK = VALUE_DIFF / TICK_COUNT; // Value that the percentage will increase per interval

    let currentValue = from;
    let currentTime = 0;

    intervalCallback(from);

    const newTimer = setInterval(() => {
      const diff = to - currentValue;

      if (diff < PROGRESS_PER_TICK) {
        currentValue = to; // End exactly on the desired "to"
      } else {
        currentValue += PROGRESS_PER_TICK;
      }
      intervalCallback(currentValue); // Return the current value on each interval

      currentTime += interval; // Keep track of time

      if (currentTime >= duration || currentValue >= to) {
        clearInterval(newTimer);
        callback && callback(); // Completion callback
      }
    }, interval);

    setTimer(newTimer); // timer stored for cleanup
  };

  const clearTimer = () => {
    if (timer) clearInterval(timer);
  };

  return {
    startAnimate,
  };
};

export default useAnimateValue;
