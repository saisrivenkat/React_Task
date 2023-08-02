import react from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/employeeSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.employee.user);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          Employee Manager
        </Link>
      </div>
      <div className="sub_menu">
        <div className="add_employee">
          <Link to="/add" className="link">
            <span>Add Employee</span>
          </Link>
        </div>
        {user.email ? (
          <div
            className="user_login user_logout"
            onClick={() => dispatch(removeUser())}>
            <LogoutIcon />
            <span>Logout</span>
          </div>
        ) : (
          <div className="user_login user_logout">
            <LoginIcon />
            <Link to="/login" className="link">
              <span>Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
