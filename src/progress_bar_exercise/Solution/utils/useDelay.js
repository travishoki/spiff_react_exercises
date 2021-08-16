import { useEffect, useState } from "react";

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
