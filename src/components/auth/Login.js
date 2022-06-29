import axios from "axios";
import React from "react";

import { useEffect, useRef, useState } from "react";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [username, password]);

  const LoginUser = async (e) => {
    try {
      e.preventDefault(); // stop the form from reloading the page
      const data = {
        username: username,
        password: password,
      };
      await axios
        .post("http://localhost:5000/users/api/authenticate", data)
        .then((res) => {
          setUsername("");
          setPassword("");
          setSuccess(true);
        });
    } catch (err) {
      if(err.response.data.message){
        setError(err.response.data.message);
      }else if (err.response.data.error) {
        setError(err.response.data.error);
      }else if(err.response.status === 400){
        setError('Missing username or password');
      }else{
        setError("Something went wrong");

      }
      
    }
  };

  return (
    <>
      {success ? (
        <section>
          <div className="alert alert-success">
            <h3>Success!</h3>
            <p>You have successfully logged in.</p>
          </div>
        </section>
      ) : (
        <section >
          <div className="container bg-light">
            <p
              ref={errRef}
              className={error ? "error" : "offScreen"}
              arial-live="assertive"
            >
              {error}
            </p>
            <h1 className="text-center">Login Page</h1>

            <div className="from-group">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                className="form-control"
                id="username"
                ref={userRef}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="submit"
                className="btn btn-primary mt-3"
                onClick={LoginUser}
              />
            </div>
            <p>
              Need an Account? <br />
              <span className="line">
                <a href="/register">Sign Up</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;

