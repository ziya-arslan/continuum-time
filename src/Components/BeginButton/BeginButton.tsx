import React from "react";
import { useBegin } from "../../store/store";
import arrow from "../../assets/svg/Arrow.svg";
import { motion } from "framer-motion";
import "./BeginButton.css";
const BeginButton = () => {
  const { begin, setBegin } = useBegin();
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 500, duration: 0.7 }}
    >
      <button className="begin-btn" onClick={() => setBegin(true)}>
        <div className="flex items-center bg-grayColor px-3 py-1 rounded-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-pink-500 font-light md:text-[48px] text-[38px] ml-8 md:mr-12 mr-8"
          >
            Begin
          </motion.span>
          <span className="bg-pink-600 rounded-full">
            <motion.div whileHover={{ x: [0, 10, 0, 10, 0] }} className="p-3">
              <img src={arrow} alt="" />
            </motion.div>
          </span>
        </div>
      </button>
    </motion.div>
  );
};

export default BeginButton;
