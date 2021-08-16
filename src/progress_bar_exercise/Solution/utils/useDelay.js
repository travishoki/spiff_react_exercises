import { useEffect, useState } from "react";

/*
Custom Hook:
- Triggers a callback after a given time interval
- Clears the interval when the component unmounts
- Reusable
*/

const useDelay = () => {
  const [ timer, setTimer ] = useState();

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [ timer ]);

  const startDelay = (duration, callback) => {
    const newTimer = setTimeout(() => {
      callback && callback();
      clearInterval(newTimer);
    }, duration);

    setTimer(newTimer);
  };

  return {
    startDelay,
  };
};

export default useDelay;
