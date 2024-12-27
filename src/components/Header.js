import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

//JSX is HTML/XML like syntax and its transpiled before it reaches JS Engine and its done by Parcel(babel does it for Parcel)
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {" "}
            <Link to={"/"}> Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");
              }}
              className="login-btn"
            >
              {buttonName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
