import React, { useContext, useState } from "react";
import "./login.css";
import { DataContext } from "../DataProvider";

const Login = (props) => {
  const { handleLogin } = props;

  const { setNewUserName } = useContext(DataContext);

  const [input, setInput] = useState("");

  return (
    <>
      <div className="login">
        <h3>enter your name</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setNewUserName(input);
            setInput("");
          }}
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default Login;
