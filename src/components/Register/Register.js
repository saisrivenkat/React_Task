import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BadgeIcon from "@mui/icons-material/Badge";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Inputfield";
import "./register.css";
import { useDispatch } from "react-redux";
import { setuser } from "../../redux/employeeSlice";
const Register = () => {
  const usenavigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const [show, setshow] = useState();
  //toast.configure()
  const submit = () => {
    const obj = {
      username,
      email,
      pwd,
    };
    localStorage.setItem("user", obj);
    dispatch(setuser(obj));
    usenavigate("/login");
  };
  return (
    <div className="background">
      <div className="box">
        <h1 className=" text-center font-bold text-xl">Welcome</h1>
        <p className="text-slate-400 mt-2">
          Create the account for a wonderful Journey
        </p>
        <Input
          type="text"
          placeholder="Username"
          Icon={BadgeIcon}
          setvalue={setusername}
        />
        <Input
          type="mail"
          placeholder="Email"
          Icon={MailIcon}
          setvalue={setemail}
        />
        <div className="input_box mt-4 mb-4 p-2 w-full border-2 border-neutral-100 rounded-lg outline-none flex">
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
              className="eye text-gray-400 cursor-pointer"
            />
          ) : (
            <VisibilityIcon
              onClick={() => setshow(!show)}
              className="eye text-gray-400 cursor-pointer"
            />
          )}
        </div>
        <button
          className="bg-blue-500 w-full rounded-lg mt-4 h-11 text-slate-100"
          onClick={submit}>
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Register;
