import { HashLink as Link } from 'react-router-hash-link';  

import './index.css'
const Navbar = () => {  
    return (  
        <nav className='navbar'>  
            <div className='navbar-logo'>  
                <h1>H<span>emalatha</span></h1>  
            </div>  

            <ul className='nav-menu'>  
                <li>  
                    <Link className='nav-link' to="#home" smooth={true}>Home</Link>  
                </li>  
                <li>  
                    <Link className='nav-link' to="#about" smooth={true}>About</Link>  
                </li>  
                <li>  
                    <Link className='nav-link' to="#skills" smooth={true}>Skills</Link>  
                </li>  
                <li>  
                    <Link className='nav-link' to="#services" smooth={true}>Services</Link>  
                </li>  
                <li>  
                    <Link className='nav-link' to="#portfolio" smooth={true}>Portfolio</Link>  
                </li>  
            </ul>  

            <div className='nav-btn'>  
                <button>Connect With Me</button>  
            </div>  
        </nav>  
    );  
};  

export default Navbar;
