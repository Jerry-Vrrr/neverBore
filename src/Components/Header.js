import { useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
import "./_Header.scss";
import neverBore from "../neverBore.png";
import Swiper from "swiper";

const Header = () => {
  
  return (
    <section className="header">
      {/* <Link to="/"> */}
        <img className="logo" src={neverBore} alt="neverBore raven logo" />
      {/* </Link> */}
      
    </section>
  );
};

export default Header;
