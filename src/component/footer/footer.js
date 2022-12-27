import React from 'react';
import { Grid } from '@mui/material';
import './footer.css'
import logo from '../../assets/logo-png-color 1.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footercontainer">

                    <div className="flex align-start">
                        <div>
                            <div style={{ width: '119px', height: '59px' }}>
                                <img style={{ width: '100%', height: '100%' }} src={logo} alt="logo" />
                            </div>
                            <p style={{ color: '#ffffff' }}>
                                Molestias delectus sunt atque <br /> perferendis, repellat voluptates, <br />voluptatibus non eum aspernatur inventore <br /> quo nam necessitatibus nobis iure.
                            </p>
                            <ul className="flex">
                                <li style= {{margin: '0', padding: 0}}>
                                    <a href="#">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li style= {{margin: '0', padding: 0}}>
                                    <a href="#">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li style= {{margin: '0', padding: 0}}>
                                    <a href="#">
                                        <LinkedInIcon />
                                    </a>
                                </li>
                                <li style= {{margin: '0', padding: 0}}>
                                    <a href="#">
                                        <InstagramIcon />
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Terms Of Us</a></li>
                                <li><a href="#">privacy Statement</a></li>
                                <li><a href="#">Feedbacks</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Help me</h4>
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Legel </a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Contact Info</h4>
                            <ul>
                                <li><a href="#">po Box: +47 554-665-654</a></li>
                                <li><a href="#">Downtown street Dubai</a></li>
                                <li><a href="#">UAE</a></li>
                                <li><a href="#">Email: info@medcollapp.com</a></li>
                                <li><a href="#">Website: www.medcollapp.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
                <Grid container style={{backgroundColor: '#333', color: '#ffffff', marginBottom: 0, paddingBottom: 0, textAlign: 'center'}}>
                    <Grid item xs = {6}>
                        <p>&copy; 2022 medcollapp. All rights reserved</p>
                    </Grid>
                    <Grid item xs = {6}>
                        {/* <p>2022 medcollapp. </p> */}
                        <div>
                            <ul className="flex" style={{listStyle: 'none'}}>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Terms Of Us</a></li>
                                <li><a href="#">privacy Statement</a></li>
                                <li><a href="#">Feedbacks</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
        </>
    )
}