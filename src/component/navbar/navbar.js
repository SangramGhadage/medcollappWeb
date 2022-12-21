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
                        <li><a style={{marginRight: '-15%'}} href="#"><HomeOutlinedIcon /></a></li>
                        <li><a href="#">Company <span><ExpandMoreOutlinedIcon /></span></a></li>
                        <li><a href="#">Knowledge <span><ExpandMoreOutlinedIcon /></span></a></li>
                        <li><a href="#">Contact Us <span><ExpandMoreOutlinedIcon /></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}