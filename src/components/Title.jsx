import React from "react";
const Title = (props) => {
  const classes = props.className;

  return (
    <>
      <img
        className={classes + " logo"}
        src="https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg"
        alt="logo"
      />
    </>
  );
};

export default Title;
