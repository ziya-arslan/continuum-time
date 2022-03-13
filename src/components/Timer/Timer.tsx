import React, { useState, useEffect } from "react";
import Time from "../../helpers/time";
import { ControlButtons } from "../ControlButton";

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = Time(time);
    setTimerArray(timeArray);
  }, [time]);

  return (
    <div className="flex flex-col bg-gradient-to-b from-pink-50 to-yellow  w-full h-full">
      <div className="items-center flex flex-col mt-28  h-full w-full ">
        <div className="h-3 mr-1 rounded-lg w-3/4 border border-white"></div>
        <div
          data-testid="timer"
          className="flex flex-row tracking-normal ml-8 mt-8 font-Lexend text-6xl text-white font-thin h-full"
        >
          <p data-testid="hours">{timerArray[0]}</p>
          <span>:</span>
          <p data-testid="minute">{timerArray[1]}</p>
          <span>:</span>
          <p data-testid="second">{timerArray[2]}</p>
        </div>
        <div className="h-3 mr-1 mt-10 rounded-lg w-3/4 border border-white"></div>
      </div>
      <ControlButtons setTime={setTime} />
    </div>
  );
}

export default Timer;
