import Button from "../components/Button";
import InputContainer from "../components/InputContainer";

export default function Home() {
  return (
    <>
      <main className="register">
        <div className="heading">
          <div>Got an account?</div>
          <button>Sign in</button>
        </div>
        <div className="panels-container">
          <img src="./bigcircle.svg" alt="" className="lg bigcircle" />
          <img src="./redsmiley.svg" alt="" className="lg redsmiley" />
          <img src="./smallcircle.svg" alt="" className="sml smallcircle" />
          <img src="./logo.svg" alt="" className="sml logo" />
          <img src="./starsmall.svg" alt="" className="sml starsmall" />
        </div>

        <div className="form-container">
          <div className="form">
            <div className="welcome">
              <div>Welcome to Couch!</div>
              <div>Let's get you Started</div>
            </div>
            <InputContainer
              labelText={"Full Name"}
              inputType={"text"}
              inputId={"register-name"}
            />{" "}
            <InputContainer
              labelText={"Email Address"}
              inputType={"email"}
              inputId={"register-email"}
            />{" "}
            <InputContainer
              labelText={"New Password"}
              inputType={"password"}
              inputId={"register-password"}
            />
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="">
                I agree with the Terms & Conditions of Couch
              </label>
            </div>
            <Button buttonText={"Create Account"} />
          </div>
        </div>
      </main>
    </>
  );
}
