import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import neverBore from "../neverBore.png";


const Header = () => {
  
  return (
    <section className="header">
      <Link className='home' to="/">
        <img className="logo" src={neverBore} alt="neverBore raven logo" />
      </Link>
      
    </section>
  );
};

export default Header;
