import React from "react";

type Props = {
  title: String;
};

const TitleField = ({ title }: Props) => {
  return (
    <div data-test="title-filed" className="p-2 bg-white rounded-2xl">
      <span className="text-pink-500">{title}</span>
    </div>
  );
};

export default TitleField;
