import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

//JSX is HTML/XML like syntax and its transpiled before it reaches JS Engine and its done by Parcel(babel does it for Parcel)
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="flex justify-between bg-orange-100  dark:bg-slate-400 shadow-md ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
            {" "}
            <Link to={"/"}> Home</Link>
          </li>
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
            Cart
          </li>
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
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
          <li className="px-4 mx-2 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500">
            <button onClick={toggleDarkMode}>Dark Mode</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
