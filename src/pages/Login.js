import React, { useEffect } from "react";
import { login } from "../api/auth";

const Login = () => {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ token: "97989898987978" }));
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log("login", data);
    const response = await login(data);
    console.log("submitLogin", response);
  };

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          type="email"
          required={true}
          className="form-control"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          required={true}
          className="form-control"
          placeholder="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
