import React, { useState } from "react";
import { motion } from "framer-motion";
import close from "../../assets/svg/close.svg";
import icon from "../../assets/svg/input.svg";
const ModalCard = () => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const [newTitle, setNewTitle] = useState("");
  console.log(newTitle);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1.2 }}
      className="flex flex-col items-center justify-center w-screen h-screen"
      data-test="modal-card"
    >
      <div className="card-body shadow-2xl bg-white rounded-3xl w-2/5 ">
        <div className="mt-3 mr-5 flex justify-end">
          <img
            src={close}
            alt="close"
            className="cursor-pointer "
            onClick={() => console.log("click")}
          />
        </div>
        <div className="mx-5">
          <div className="flex items-end ">
            {showInput ? (
              <input
                className="rounded-3xl	bg-white outline-0 text-[28px] font-light pb-5 pt-8  pl-10 w-5/6 h-7 "
                onChange={(e) => setValue(e.currentTarget.value)}
              />
            ) : (
              <div className="rounded-3xl bg-white outline-0 text-[28px] font-light pb-5 pt-8 pl-10 w-5/6 h-7">
                <div className="relative -top-4">react</div>
              </div>
            )}
            <img
              src={icon}
              alt="input"
              className="cursor-pointer"
              onClick={() => setShowInput(true)}
            />
          </div>
          <motion.hr
            animate={{
              x: showInput ? [-20, 20, -15, 15, -10, 10, 0] : 0,
              y: showInput ? [-3, 3, -2, 2, -1, 1, 0] : 0,
            }}
            className={`mx-10 mt-2 bg-slate-300 ${showInput && " h-1"}`}
          />
        </div>
        <div
          className="content px-8 text-[24px] font-light mt-6"
          data-test="content"
        >
          ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at
          quis risus sed vulputate
        </div>
        <div className="flex w-full justify-end pr-12 mt-6 mb-8">
          <motion.button
            className="btn-save rounded-xl text-white text-[36px] px-4 font-extralight	bg-pink-50 hover:bg-orange-400 duration-500"
            data-test="btn-save"
            onClick={() => setNewTitle(value)}
          >
            save
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalCard;
