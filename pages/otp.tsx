import React from "react";
import Button from "../components/Button";
import InputContainer from "../components/InputContainer";

const otp = () => {
  return (
    <div className="otp-container">
      <div className="logo">
        <img src="./logodark.svg" alt="" />
      </div>
      <div className="otp-box">
        <div>Almost Done</div>
        <div>Verify your Account</div>
        <div>
          Hey Emmanuel, a 6-digit OTP has been sent to the mail.
          <br />
          Kindly check your mail and provide OTP to verify account.
        </div>
        <div>
          <div className="otp-email">samuelobasi2005@gmail.com</div>
          <button>Change Email</button>
        </div>
        <InputContainer
          labelText={"OTP"}
          inputType={"number"}
          inputId={"otp"}
          placeholder={"Enter 6-Digit OTP"}
        />
        <div className="resend">
          <div>Didn't see the code?</div>
          <button>Resend Code</button>
        </div>
        <div className="otp-button-verify">
          <Button buttonText="Verify Account" />
        </div>
      </div>
      <div className="otp-contact">
        <div>Stuck?</div>
        <div>Contact Support</div>
      </div>
    </div>
  );
};

export default otp;
