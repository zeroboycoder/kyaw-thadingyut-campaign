import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Logo from "../../assets/logo_long.png";
import style from "./navBar.module.css";

const NavBar = () => {
  const location = useLocation();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navBarClass = showMobileNav ? `${style.mobile_nav} ${style.show_mobile_nav}` : `${style.mobile_nav}`;

  const activeClass = (route:string) => location.pathname === route ? style.active : '';

  return (
    <header className="fixed top-0 left-0 w-screen z-50">
      <nav className="container h-16 m-auto flex justify-between items-center">
        <div className="h-12">
          <img src={Logo} alt="Logo" className="h-full" />
        </div>

        {/* Desktop Navbar */}
        <ul className="text-white hidden md:flex">
          <li className="px-4">
            <Link to="/" className={activeClass("/")}>Home</Link>
          </li>
          <li className="px-4">
            <Link to="/prize" className={activeClass("/prize")}>Prize</Link>
          </li>
          <li className="px-4">
            <Link to="/about" className={activeClass("/about")}>About</Link>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <div className='sm:block md:hidden'>
        <IconButton onClick={() => setShowMobileNav(true)}>
          <Menu className="text-white" />
        </IconButton>
        </div>

        <div className={`${navBarClass} fixed top-0 right-0 z-50`}>
          <div className='fixed right-3 top-3'>
            <IconButton onClick={() => setShowMobileNav(false)}>
              <Close className='text-white' />
            </IconButton>
          </div>
          <ul className="flex flex-col items-center text-white mt-10" onClick={() => setShowMobileNav(false)}>
            <li>
              <Link to="/" className={activeClass("/")}>Home</Link>
            </li>
            <li>
              <Link to="/prize" className={activeClass("/prize")}>Prize</Link>
            </li>
            <li>
              <Link to="/about" className={activeClass("/about")}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
