import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    try{
    e.preventDefault();// stop the form from reloading the page
    const data = {
      name: name,
      username: username,
      email: email,
      password: password,
    };
    axios.post("http://localhost:5000/users/api/register", data).then((res) => {
      console.log(res);
    });
    }catch(err){
      console.log(err);
    }
  };


  return (
    <>
      <div className="container">
        <h1 className="text-center">Register Page</h1>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{password}</p>

        <div className="from-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={registerUser}
          />
        </div>
      </div>
    </>
  );
}

export default Register;
