import React from "react";
import Button from "../components/Button";
import InputContainer from "../components/InputContainer";

const login = () => {
  return (
    <>
      <main className="login">
        {" "}
        <div className="login-logo-sml">
          <img src="./logodark.svg" alt="" />
        </div>
        <div className="heading-sml">
          <div>No account?</div>
          <button>Create Account</button>
        </div>
        <div className="form-container">
          <div className="heading">
            <div>No account?</div>
            <button>Create Account</button>
          </div>
          <div className="form">
            <div className="login-logo">
              <img src="./logodark.svg" alt="" />
            </div>
            <div className="welcome-login">
              <div>Hello There...</div>
              <div>Welcome Back</div>
            </div>
            <InputContainer
              labelText={"Email Address"}
              inputType={"email"}
              inputId={"register-email"}
            />{" "}
            <InputContainer
              labelText={"Password"}
              inputType={"password"}
              inputId={"register-password"}
            />
            <Button buttonText={"Login to Account"} />
            <div className="forgot-password">
              <div>Forgot Password?</div>
              <button>Let's help out</button>
            </div>
          </div>
        </div>{" "}
        <div className="panels-container-lgn">
          <img src="./loginFrame.svg" alt="" />
          <img src="./starsmalllgn.svg" alt="" className="starsmalllgn sml" />

          <img src="./starsmalllgn2.svg" alt="" className="sml starsmalllgn2" />
        </div>
      </main>
    </>
  );
};

export default login;
