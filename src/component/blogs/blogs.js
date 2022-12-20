import { Grid } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import blogImage from '../../assets/blogImg.png'
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
    const classes = useStyles();

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,

                }
            },
        ]
    };

    return (
        <>
            <div className="heading">
                <h1 style={{ marginTop: '1%' }}>News & Blogs</h1>
                <h4 style={{ marginBottom: '-2%' }}>We are in media</h4>
            </div>
            <div style={{ margin: '6%' }}>
                <Slider {...settings} style={{ paddingLeft: '10px', padding: '1%' }}>
                    <div>
                        <div className={classes.blogcard} sx={{ boxShadow: 4, }}>
                            <img src={blogImage} alt="" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                            <h4>Why to choose Travelite hotel for your next trip ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ultricies commodo fames donec odio odio eleifend odio velit quam. Proin aenean egestas duis lectus in blandit aliquet egestas hac. Volutpat non mauris morbi.</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.blogcard} >
                            <img src={blogImage} alt="" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                            <h4>Why to choose Travelite hotel for your next trip ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ultricies commodo fames donec odio odio eleifend odio velit quam. Proin aenean egestas duis lectus in blandit aliquet egestas hac. Volutpat non mauris morbi.</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.blogcard} >
                            <img src={blogImage} alt="" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                            <h4>Why to choose Travelite hotel for your next trip ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ultricies commodo fames donec odio odio eleifend odio velit quam. Proin aenean egestas duis lectus in blandit aliquet egestas hac. Volutpat non mauris morbi.</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.blogcard} >
                            <img src={blogImage} alt="" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                            <h4>Why to choose Travelite hotel for your next trip ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ultricies commodo fames donec odio odio eleifend odio velit quam. Proin aenean egestas duis lectus in blandit aliquet egestas hac. Volutpat non mauris morbi.</p>
                        </div>
                    </div>
                    <div>
                        <h1>blog5</h1>
                    </div>
                    <div>
                        <h1>blog6</h1>
                    </div>

                </Slider>
            </div>
        </>
    )
}
const useStyles = makeStyles(() => ({
    blogcard: {
        width: '93%',
        borderRadius: '12px',
        padding: '7px',
        backgroundColor: '#EEEEEE',
        '& h4': {
            color: '#000000',
            fontFamily: 'poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
        },
        '& p': {
            color: '#000000',
            fontFamily: 'poppins, sans-serif',
            fontSize: '0.9rem',
            fontWeight: '400',
        },
    }

}));