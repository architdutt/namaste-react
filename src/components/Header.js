import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

//JSX is HTML/XML like syntax and its transpiled before it reaches JS Engine and its done by Parcel(babel does it for Parcel)
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
