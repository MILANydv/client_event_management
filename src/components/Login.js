import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = (e) => {
    try {
    //   e.preventDefault(); // stop the form from reloading the page
      const data = {
        username: username,
        password: password,
      };
      axios
        .post("http://localhost:5000/users/api/authenticate", data)
        .then((res) => {
         alert(res.data.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Login Page</h1>
        <p>{username}</p>
        <p>{password}</p>

        <div className="from-group">
        
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="btn btn-primary mt-3"
            onClick={LoginUser}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
