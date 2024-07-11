import React, { useState } from "react";
import "./Entry.style.css";
import LoginForm from "../../components/login/Login.component";
import PasswordResetForm from "../../components/password-reset/PasswordReset.component";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setformLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      return alert("Fill up all the details");
    }
    console.log(email, password);
    // TODO : Call the API to submit the form
  };
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up email id");
    }
    console.log(email);
    // TODO : Call the API to submit the form
  };
  const formSwitcher = (formType) => {
    setformLoad(formType);
  };
  return (
    <div className="entry-page bg-info">
      <div className="container bg-light text-dark p-5 form-box">
        {/* <div className="container bg-light p-5">
          <h1 className="fw-bold">Welcome to Admin Dashboard</h1>
          <p>Go to My Website</p>
          </div> */}
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
            handleSubmit={handleSubmit}
          />
        )}
        {formLoad === "reset" && (
          <PasswordResetForm
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            handleResetSubmit={handleResetSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
