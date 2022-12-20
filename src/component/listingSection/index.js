import { Grid, Card,  } from '@mui/material';
import React from 'react'
import './listing.css'
import Rectangle1 from '../../assets/Rectangle 231.png'
import Rectangle2 from '../../assets/Rectangle 231 (1).png'
import Rectangle3 from '../../assets/Rectangle 231 (2).png'
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function Listing() {
    return (
        <>
            <div className="root1">
                <div className="heading">
                    <h1>Featured Listings</h1>
                    <h4>World top service providing & popular Hospitals are listed here</h4>
                </div>
                {/* <div className="cards"> */}
                    <Grid container spacing={2} justifyContent= 'center' alignItems='center' direction='row'style={{paddingLeft: '5%', marginTop: '2%'}}>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle1} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                    <a href="">Know More</a>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle2} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                     <a href="">Know More</a>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle3} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                     <a href="">Know More</a>
                                </Card>
                        </Grid>
                      
                    </Grid>
                    <Grid container spacing={2} justifyContent= 'center' alignItems='center' direction='row'style={{paddingLeft: '5%', marginTop: '2%', marginBottom: '2%'}}>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle1} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                    <a href="">Know More</a>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle2} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                    <a href="">Know More</a>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 4, borderRadius: '16px' }} className='listingCard'>
                                    <img src={Rectangle3} alt="" className='listingImage' />
                                    <p className= 'HospitalName'>The Dwarka Hospital</p>
                                    <p className= 'HospitalLocation'> <AddLocationIcon/> Chandani Chowk, Kothrud, Pune</p>
                                    <a href="">Know More</a>
                                </Card>
                        </Grid>
                      
                    </Grid>
                {/* </div> */}
            </div>
        </>
    )
}