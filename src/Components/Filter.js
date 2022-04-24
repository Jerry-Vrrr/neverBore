
import { Link } from "react-router-dom";

const Filter = () => {
  
  return (
    <section className="filter">
      <button>
      <Link className='about' to="./about" style={{ textDecoration: "none" }}>About</Link>
      </button>
      <button><a target='blank' href="https://www.linkedin.com/in/jerry-vohrer-974a97205/" style={{ textDecoration: "none" }}>Contact
        </a></button>
    </section>
  );
};

export default Filter;
