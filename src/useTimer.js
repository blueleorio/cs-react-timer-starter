import { useState, useRef } from "react";

// TODO:  Reference: https://www.w3schools.com/js/js_timing.asp

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);
  const [text, setText] = useState("Time Machine");

  const startAudioRef = useRef(new Audio("/gud.mp3"));
  const stopAudioRef = useRef(new Audio("/dio.mp3"));
  const restAudioRef = useRef(new Audio("/mac.mp3"));

  const playAudio = (audioRef, loop, volume = 1) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    } else {
      // No need to recreate the Audio element if it already exists
      audioRef.current = new Audio(audioRef.current.src);
    }
    audioRef.current.volume = volume;
    if (loop) {
      audioRef.current.loop = true;
    }

    audioRef.current.play();
  };

  const start = () => {
    playAudio(startAudioRef, true);
  };

  const stop = () => {
    playAudio(stopAudioRef, false, 0.2);
  };

  const reset = () => {
    playAudio(restAudioRef, false);
  };

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
    setText("Time goes brrrrrr...!!!");
    start();
  };

  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setText("Za Warudo");
    if (startAudioRef.current) {
      startAudioRef.current.pause();
      startAudioRef.current.currentTime = 0;
    }
    stop();
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setText("T i m e m i T");
    if (startAudioRef.current) {
      startAudioRef.current.pause();
      startAudioRef.current.currentTime = 0;
    }
    reset();
  };

  return { time, startTimer, stopTimer, resetTimer, active, text, start, stop };
};

export default useTimer;
