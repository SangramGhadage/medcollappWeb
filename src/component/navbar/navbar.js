import React from 'react';
import './style.css'
import logo from '../../assets/logo-png-color 1.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="companyLogo">
                    <img className="logoImg" src={logo} alt="" />
                </div>
                <div className='navLink'>
                    <div className="link">
                        <HomeOutlinedIcon/>
                    </div>
                    <div className="link">
                        <a href="">Company</a>
                        <ExpandMoreOutlinedIcon/>
                    </div>
                    <div className="link">
                        <a href="">Knowledge </a>
                        <ExpandMoreOutlinedIcon/>
                    </div>
                    <div className="link">
                        <a href="">Contact Us</a>
                        <ExpandMoreOutlinedIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}