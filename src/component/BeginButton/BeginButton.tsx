import React from "react";
import { useBegin } from "../../store/store";
import arrow from "../../assets/svg/Arrow.svg";
import "./BeginButton.css";
const BeginButton = () => {
  const { begin, setBegin } = useBegin();
  return (
    <div>
      <button className="begin-btn m-10" onClick={() => setBegin(true)}>
        <div className="flex items-center bg-grayColor px-3 py-1 rounded-full">
          <span className="text-color font-light md:text-[48px] text-[38px] ml-8 md:mr-12 mr-8">
            Begin
          </span>
          <span className="bg-pinkColor rounded-full">
            <div className="p-3">
              <img src={arrow} alt="" />
            </div>
          </span>
        </div>
      </button>
    </div>
  );
};

export default BeginButton;
