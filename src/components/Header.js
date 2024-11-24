import { LOGO_URL } from "../utils/constant";

//JSX is HTML/XML like syntax and its transpiled before it reaches JS Engine and its done by Parcel(babel does it for Parcel)
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
