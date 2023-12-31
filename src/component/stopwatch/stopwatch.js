
import React, { useState, useEffect } from "react";

import "./stopwatch.css";
const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <div classname="container col-lg-12  ">
    <div className=" text-dark bg text-center display-4 mar p-5 ">
        <div className="align-item-center mx-auto move p-5 ">
    <div className="stopwatch-container">
      <p className="stopwatch-time">
      <h1 className="display-4">STOPWATCH</h1>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
       
      
        <button className=" diplay-4 btn btn-outline-dark  stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className=" ml-5 btn btn-outline-dark stopwatch-button " onClick={reset}>
          Reset
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Stopwatch;