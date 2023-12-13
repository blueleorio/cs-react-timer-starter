import { useState, useRef } from "react";

// TODO:  Reference: https://www.w3schools.com/js/js_timing.asp

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0); // TODO: code here

  const isStart = null; // TODO: code here
  const active = null; // TODO: code here
  const refInterval = 0; // TODO: code here

  const startTimer = () => {
    // TODO: code here;
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
