import { useState } from "react";
import { SignUpAPI , LoginAPI} from "../api/AuthAPI";
import PreneurLogo from "../assets/preneur-network-logo.png"
import "../Sass/LoginComponent.scss";

function LoginComponent() {

  const [cred, setCreds] = useState({});

  const loginBtn = async () =>  {
    let isLogin = true;

    if (isLogin) {
         let res = await  LoginAPI(cred.email, cred.password);
         console.log(res?.user);
    } else {
       let res = await SignUpAPI(cred.email, cred.password);
       console.log(res?.user);
    }
  };
  return (

    <div className="login-wrapper"> 
      <img src={PreneurLogo} alt="logo" className="preneurLogo"/>
      <h1>Login</h1>

    {/* 
    <input
      type="text"
      className="common-input"
      placeholder="Enter your Email"
      onChange={(val) => setCreds({ ...cred,email: val.target.value})}
      // Check why this ternitery oprator required
    />
    <input
      type="text"
      className="common-input"
      placeholder="Enter Your Password"
      onChange={(val) => setCreds({ ...cred, password: val.target.value})}
      // Check why this ternitery oprator required

    />

    <button className="login-btn" onClick={loginBtn}>
      Login
    </button> */}
  </div>
  )
}

export default LoginComponent