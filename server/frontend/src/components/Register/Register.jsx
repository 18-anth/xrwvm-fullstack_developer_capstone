import React, { useState } from "react";
import Header from "../Header/Header";
import "./Register.css";

const Register = ({ onClose }) => {

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        password,
      }),
    });

    const json = await res.json();

    if (json.status === "User Registered") {
      alert("Registration successful!");
      window.location.href = "/login";
    } else {
      alert(json.message || "Registration failed");
    }
  };

  return (
    <div>
      <Header />
      <div onClick={onClose}>

        <div className="modalContainer">
          <form className="login_panel" onSubmit={register}>

            <div>
              <span className="input_field">Username </span>
              <input
                type="text"
                placeholder="Username"
                className="input_field"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <span className="input_field">First Name </span>
              <input
                type="text"
                placeholder="First Name"
                className="input_field"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <span className="input_field">Last Name </span>
              <input
                type="text"
                placeholder="Last Name"
                className="input_field"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <span className="input_field">Password </span>
              <input
                type="password"
                placeholder="Password"
                className="input_field"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                className="action_button"
                type="submit"
                value="Register"
              />
            </div>

          </form>
        </div> </div>
    </div>
  );
};

export default Register;