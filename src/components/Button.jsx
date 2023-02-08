import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button type={props.type} disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
