import React from "react";
import { login } from "../api/auth";

import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();

  const submitLogin = async (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log("login", data);

    try {
      const response = await login(data);
      console.log("submitLogin", response.data.data);

      localStorage.setItem("auth", JSON.stringify(response.data.data));
      navigate('/products')
    } catch (err) {
      console.log("try catch", err.response.data);
    }
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
