import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="text-center">Register Page</h1>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{gender}</p>
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
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="radio"
              name="gen"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            <input
              type="radio"
              name="gen"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
