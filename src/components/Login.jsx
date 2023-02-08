import React, { useEffect, useState } from "react";
import Button from "./Button";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = () => {
    alert("submitted");
  };

  useEffect(() => {
    if (+age > 6 && email.includes("@")) {
      setDisabled(false);
      console.log(age, email);
    } else {
      setDisabled(true);
    }
  }, [age, email]);
  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        <label>Enter your Name</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={emailHandler}
          value={email}
        ></input>
      </div>
      <div>
        <label>Enter your age</label>
        <input
          type="number"
          placeholder="Enter your Age"
          onChange={ageHandler}
          value={age}
        ></input>
      </div>
      <Button type="submit" disabled={isDisabled} title="Submitted" />
    </form>
  );
};

export default Login;
