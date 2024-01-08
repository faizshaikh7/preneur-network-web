import { useState } from "react";
import { SignUpAPI, GoogleSignInAPI } from "../api/AuthAPI";
import PreneurLogo from "../assets/preneur-network-logo.png";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
  let navigate = useNavigate();

  const [cred, setCreds] = useState({});

  const loginBtn = async () => {
    try {
      let res = await SignUpAPI(cred.email, cred.password);
      toast.success("Successfully Signed Up");
      console.log(res?.user);
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };

  const googleAuthBtn = () => {
    let res = GoogleSignInAPI();
    console.log(res);
  };

  return (
    <div className="login-wrapper">
      <img src={PreneurLogo} alt="logo" className="preneurLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">SignUp</h1>
        <p className="sub-heading">Make the most of your professional life</p>

        <div className="auth-inputs">
          <input
            type="email"
            className="common-input"
            placeholder="Email or Phone"
            onChange={(val) => setCreds({ ...cred, email: val.target.value })}
            // Check why this ternitery oprator required
          />
          <input
            type="password"
            className="common-input"
            placeholder="Password"
            onChange={(val) =>
              setCreds({ ...cred, password: val.target.value })
            }
            // Check why this ternitery oprator required
          />
        </div>

        <button
          className="bg-blue-800 text-white rounded-full h-11 mt-4 w-72 mb-4"
          onClick={loginBtn}
        >
          SignUp
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <button
          onClick={googleAuthBtn}
          className="bg-blue-700 text-white rounded-full h-11 mt-4 w-72"
        >
          SignUp with Google
        </button>
        {/* <button
          onClick={""}
          className="bg-black text-white rounded-full h-11 mt-2 mb-4 w-72 "
        >
          Sign in with Apple
        </button> */}
        <p className="go-to-signup">
          Already have an account?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterComponent;
