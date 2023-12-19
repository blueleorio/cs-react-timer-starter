import { useState, useRef } from "react";

// TODO:  Reference: https://www.w3schools.com/js/js_timing.asp

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0); // TODO: code here

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    // TODO: code here;
    setInterval();
    active.current.disabled = true;
  };
  const stopTimer = () => {
    // TODO: code here;
  };
  const resetTimer = () => {
    // TODO: code here;
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
