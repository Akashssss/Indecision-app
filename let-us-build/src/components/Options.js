import React from "react";
import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <div className="flex flex-col mt-9">
        {props.options.map((option) => (
          <Option
            optionText={option}
            key={option}
            handleRemoveOne={props.handleRemoveOne}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
