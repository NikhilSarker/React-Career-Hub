import { Link, NavLink } from "react-router-dom";
import '../../index.css';

const Header = () => {
  const links = (
    <>
      <li className="text-base font-bold px-5">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-bold px-5">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li className="text-base font-bold px-5">
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li className="text-base font-bold px-5">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className=" pt-12 pb-10 banner_bg">
      <div className="navbar max-w-[1320px] m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" text-3xl text-[#1A1919] font-extrabold">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={''} className="px-7 text-white btn_bg py-5 text-xl font-extrabold">Star Applying</Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
