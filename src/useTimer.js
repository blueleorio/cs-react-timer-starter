import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0); // TODO: code here

  const isStart = null; // TODO: code here
  const active = null; // TODO: code here
  const refInterval = ""; // TODO: code here

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
