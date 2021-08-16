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
      clearInterval(timer); // Clear the interval when unmounting
    };
  }, [ timer ]);

  const startDelay = (duration, callback) => {
    const newTimer = setTimeout(() => {
      callback && callback();
      clearInterval(newTimer);
    }, duration);

    setTimer(newTimer); // timer stored for cleanup
  };

  return {
    startDelay,
  };
};

export default useDelay;
