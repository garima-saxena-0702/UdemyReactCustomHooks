import { useState, useEffect } from "react";

const useCounter = (forwards = true, initialVal = 0) => {
  const [counter, setCounter] = useState(initialVal);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => forwards ? prevCounter + 1 : prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
