import React from 'react';
import { Grid, Button } from '@mui/material';
import './service.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serviceImage from '../../assets/healthcare (1).png'

export default function Services() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        dots: true,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} style={{ width: '58%', borderRadius: '32px', border: '1px solid #DFDFDF', fontWeight: '500', margin: '6%', padding: '0 104px' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h2 className='serviceHeader'>Brows our categorized Services</h2>
                        </Grid>
                    </Grid>
                    <Slider {...settings}>
                        <div>
                            <div style={{ border: '0.5px solid #E3E3E3 ', margin: '20px', borderRadius: '20px', filter: 'blur(0.3px)', boxShadow: '-1px 3px 5px 0px rgba(166, 166, 166, 0.25)' }}>
                                <div className='cardHeading'>
                                    <img src={serviceImage} alt="" />
                                    <p>Personel care provider</p>
                                </div>
                                <div className='cardService'>
                                    <p>Whats include in it :</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='servicebtn'>
                                    <Button>View details</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ border: '0.5px solid #E3E3E3 ', margin: '20px', borderRadius: '20px',filter: 'blur(0.3px)', boxShadow: '-1px 3px 5px 0px rgba(166, 166, 166, 0.25)' }}>
                                <div className='cardHeading'>
                                    <img src={serviceImage} alt="" />
                                    <p>Personel care provider</p>
                                </div>
                                <div className='cardService'>
                                    <p>Whats include in it :</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='servicebtn'>
                                    <Button>View details</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div style={{ border: '0.5px solid #E3E3E3 ', margin: '20px', borderRadius: '20px',  filter: 'blur(0.3px)', boxShadow: '-1px 3px 5px 0px rgba(166, 166, 166, 0.25)'}}>
                                <div className= 'cardHeading'>
                                    <img src={serviceImage} alt="" />
                                    <p>Personel care provider</p>
                                </div>
                                <div className= 'cardService'>
                                    <p>Whats include in it :</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='servicebtn'>
                                <Button>View details</Button>
                                    </div>
                            </div>
                        </div>
                        <div>
                        <div style={{ border: '0.5px solid #E3E3E3 ', margin: '20px', borderRadius: '20px', filter: 'blur(0.3px)', boxShadow: '-1px 3px 5px 0px rgba(166, 166, 166, 0.25)'}}>
                                <div className= 'cardHeading'>
                                    <img src={serviceImage} alt="" />
                                    <p>Personel care provider</p>
                                </div>
                                <div className= 'cardService'>
                                    <p>Whats include in it :</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                        <li>Lorem ipsum dolor sit amet, cons dfre dd</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='servicebtn'>
                                <Button>View details</Button>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>


                    </Slider>
                </Grid >

            </Grid>
        </>
    )

}