import React, { useRef } from 'react';
import './style.css'
import logo from '../../assets/logo-png-color 1.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {

    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);

    const handleMenu = () => {
        hamburgerRef.current.classList.toggle('show');
        menuRef.current.classList.toggle('show');
    }
    return (
        <nav>
            <div className="navbar">
                <div className="flex">
                    <div class="img-wrapper" style={{marginLeft: '8%' }}>
                        <img src={logo} alt="logo" style={{ width: '160px', marginLeft: '0%' }} />
                    </div>
                    <button className="hamburger" id="hamburger" ref={hamburgerRef} onClick={handleMenu}>
                        <MenuIcon className='open' />
                        <CloseIcon className='close' />
                    </button>
                    <ul id="menu" ref={menuRef}>
                        <li><a href="#"><HomeOutlinedIcon /></a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Knowldge</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    {/* <div className='navLink'>
                       <div className="link">
                            <HomeOutlinedIcon />
                        </div>
                        <div className="link">
                            <a href="">Company</a>
                            <ExpandMoreOutlinedIcon />
                        </div>
                        <div className="link">
                            <a href="">Knowledge </a>
                            <ExpandMoreOutlinedIcon />
                        </div>
                        <div className="link">
                            <a href="">Contact Us</a>
                            <ExpandMoreOutlinedIcon />
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}