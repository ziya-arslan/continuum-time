import React, { useState } from "react";

const TitleInput = () => {
  const [text, setText] = useState("");

  return (
    <input
      type="text"
      name=""
      id=""
      data-test="input-box"
      placeholder="title"
      className="w-full border-b-2 border-white bg-transparent text-white outline-none placeholder-white text-6xl"
      onChange={(e) => setText(e.target.value)}
      value={text}
    ></input>
  );
};

export default TitleInput;
