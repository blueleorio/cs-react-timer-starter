import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import { useGlitch } from "react-powerglitch";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, text } = useTimer(0);
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1000,
    },
    glitchTimeSpan: {
      start: 0.0,
      end: 0.9,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });
  return (
    <div className="App container">
      <h1>{text}</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>
            {" "}
            <span ref={glitch.ref}>{formatTime(time)}</span>
          </p>
        </div>
        <div className="button__wrapper">
          <button
            className="button"
            onClick={() => {
              stopTimer();
              glitch.stopGlitch();
            }}
          >
            STOP
          </button>
          <button
            className="button"
            ref={active}
            onClick={() => {
              startTimer();
              glitch.startGlitch();
            }}
          >
            START
          </button>
          <button
            className="button"
            onClick={() => {
              resetTimer();
              glitch.stopGlitch();
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
