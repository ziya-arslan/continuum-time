import React from "react";

type cButton = {
  buttonAction: () => void;
  buttonValue: string;
  path: string;
};

const CButton = ({ buttonAction, buttonValue, path }: cButton) => {
  return (
    <div className="rounded-full">
      <button
        data-test={buttonValue}
        type="button"
        onClick={() => buttonAction()}
        id={buttonValue}
      >
        <img
          className="self-end rounded-full fill-white "
          src={path}
          alt="icon"
        />
      </button>
    </div>
  );
};
export default CButton;
