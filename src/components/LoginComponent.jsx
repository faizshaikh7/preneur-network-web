import { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import PreneurLogo from "../assets/preneur-network-logo.png";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  let navigate = useNavigate();

  const [cred, setCreds] = useState({});

  const loginBtn = async () => {
    try {
      let res = await LoginAPI(cred.email, cred.password);
      toast.success("Successfully Logged In");
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
        <h1 className="heading">Login</h1>
        <p className="sub-heading">Stay Updated on your professional world</p>

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
          Login
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <button
          onClick={googleAuthBtn}
          className="bg-blue-700 text-white rounded-full h-11 mt-4 w-72"
        >
          Sign in with Google
        </button>
        {/* <button
          onClick={""}
          className="bg-black text-white rounded-full h-11 mt-2 mb-4 w-72 "
        >
          Sign in with Apple
        </button> */}
        <p className="go-to-signup">
          New to Preneur Network?{" "}
          <span className="join-now" onClick={() => navigate("/signup")}>
            Join Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginComponent;
