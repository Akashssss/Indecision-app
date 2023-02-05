import React from "react";

const Head = (props) => {
  return (
    <div className="p-4 m-4 flex flex-col text-center">
      <h1 className="text-6xl ml-3">{props.title}</h1>
      {props.subTitle && <h3 className="text-2xl">{props.subTitle}</h3>}
    </div>
  );
};

Head.defaultProps = {
  title: "INDECISION",
};

export default Head;
