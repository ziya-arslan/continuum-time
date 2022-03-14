import React from "react";
import "./ModalCard.css";
const ModalCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen"
      data-test="modal-card"
    >
      <div className="card-body lg:w-1/2 ">
        <input className="input-style"></input>
        <hr className="mx-6" />
        <div
          className="content px-8 text-[24px] font-light mt-6"
          data-test="content"
        >
          ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at
          quis risus sed vulputate
        </div>
        <div className="flex w-full justify-end pr-12 mt-6 mb-8">
          <button
            className="btn-save text-white text-[36px] px-4 font-extralight	bg-pink-50"
            data-test="btn-save"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
