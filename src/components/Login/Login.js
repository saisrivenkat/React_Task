import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Inputfield";
import { useSelector } from "react-redux";
import "./login.css";
const Login = () => {
  const usenavigate = useNavigate();
  const user = useSelector((state) => state.employee.user);

  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const [show, setshow] = useState();

  const submit = () => {
    if (user && user.email === email) {
      if (user.pwd === pwd) {
        usenavigate("/");
      } else {
        alert("password didn't match");
      }
    } else {
      alert("Mail id not found");
    }
  };
  return (
    <div className="background">
      <div className="box">
        <h1 className="box_heading">Welcome Back</h1>
        <p className="box_test">
          Enter your crendentials to access your account
        </p>
        <Input
          type="mail"
          placeholder="Email"
          Icon={MailIcon}
          setvalue={setemail}
        />
        <div className="input_box">
          <label style={{ color: "#032541" }}>
            <LockIcon />
          </label>
          <input
            className="outline-none pl-2 w-full"
            placeholder="Password"
            type={show ? "text" : "password"}
            onChange={(e) => setpwd(e.target.value)}
          />
          {show ? (
            <VisibilityOffIcon
              onClick={() => setshow(!show)}
              className="eye "
            />
          ) : (
            <VisibilityIcon onClick={() => setshow(!show)} className="eye" />
          )}
        </div>
        <button onClick={submit}>Sign In</button>
      </div>
    </div>
  );
};
export default Login;
