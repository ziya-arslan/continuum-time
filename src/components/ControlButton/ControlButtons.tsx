import React from "react";
import { useState } from "react";
import CButton from "./CButton";

type Props = {
  setTime: Function;
};

function ControlButtons(props: Props) {
  const { setTime } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTime((prevState: number) => prevState + 1);
    }, 1000);
    setIsRunning(true);
    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // const handleSaveButton = () => {
  //   console.log("save");
  // };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="items-start self-center flex h-40 ml-20 mt-4 min-w-246">
      {/* <button onClick={handleSaveButton}>Save</button> */}
      {isRunning ? (
        <CButton
          buttonAction={handleStopButton}
          buttonValue="stop"
          className="self-end rounded-full fill-white "
          path={"../../assets/fluent_record-stop-16-filled.svg"}
        />
      ) : (
        <CButton
          buttonAction={handlePlayButton}
          buttonValue="start"
          className="self-end rounded-full fill-white"
          path="../../assets/ant-design_play-circle-filled.svg"
        />
      )}
      <CButton
        buttonAction={handleResetButton}
        buttonValue="reset"
        className="ml-2 rounded-full fill-white"
        path="../../assets/ri_restart-fill.svg"
      />
    </div>
  );
}

export default ControlButtons;
