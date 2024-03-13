import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/\D/g, "");
    // Limit the numeric value to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    // Update the phone number state with the validated value
    setPhoneNumber(limitedValue);
    // Validate phone number length
    if (limitedValue.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?{" "}
          <span>
            <a href="../Login/Login.js" style={{ color: "#2190FF" }}>
              {" "}
              Login
            </a>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required=""
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
              {phoneError && <div className="error">{phoneError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
