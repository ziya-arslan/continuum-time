import React, { useState, useEffect } from "react";
import Time from "../../helpers/time";
import { ControlButtons } from "../ControlButton";

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [timeT, setTimeT] = useState("");
  useEffect(() => {
    let timeArray: Array<number | string> = Time(time);
    setTimeT(`${timeArray[0]} : ${timeArray[1]} : ${timeArray[2]} `);
  }, [time]);

  return (
    <div className="flex flex-col w-full h-full justify-center">
      <div className="items-center flex flex-col">
        <div className="h-3 mr-1 rounded-lg w-5/6 border border-white bg-white" />
        <div
          data-testid="timer"
          className="flex flex-row tracking-normal ml-8 mt-8 font-Lexend text-[10rem] text-white font-thin h-full"
        >
          <p>{timeT}</p>
        </div>
        <div className="h-3 mr-1 mt-10 rounded-lg w-5/6 border border-white bg-white" />
      </div>
      <ControlButtons setTime={setTime} />
    </div>
  );
}

export default Timer;
