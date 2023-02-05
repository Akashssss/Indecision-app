import React from "react";

const Option = (props) => {
  return (
    <div className="flex justify-between m-3">
      <div className=" text-xl pl-12 italic flex w-[90%]">
        <li className="list-disc mr-3"></li>
        <li className="no-scrollbar overflow-scroll list-none  min-w-[80%]">
          {" "}
          {props.optionText}
        </li>
      </div>
      <button
        onClick={(e) => {
          props.handleRemoveOne(props.optionText);
        }}
        className=" shadow-md text-black bg-zinc-100 rounded-full hover:shadow-inner duration-300 h-7 w-7 flex align-middle justify-center "
      >
        -
      </button>
    </div>
  );
};

export default Option;
