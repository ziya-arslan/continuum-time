import React from "react";

type cButton = {
  buttonAction: () => void;
  buttonValue: string;
  path: string;
  className: string;
};

const CButton = ({ buttonAction, buttonValue, path, className }: cButton) => {
  return (
    <div className="rounded-full">
      <button
        data-test={buttonValue}
        type="button"
        onClick={() => buttonAction()}
        id={buttonValue}
      >
        <img className={className} src={path} alt="icon" />
      </button>
    </div>
  );
};
export default CButton;
