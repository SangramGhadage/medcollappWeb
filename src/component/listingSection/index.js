import { Grid, Card, Stack, Box } from '@mui/material';
import React from 'react'
import './listing.css'
import Rectangle1 from '../../assets/Rectangle 231.png'
import Rectangle2 from '../../assets/Rectangle 231 (1).png'
import Rectangle3 from '../../assets/Rectangle 231 (2).png'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Listing() {
    return (
        <>
            <div className="root1">
                <div className="heading">
                    <h1>Featured Listings</h1>
                    <h4>World top service providing & popular Hospitals are listed here</h4>
                </div>
                {/* <div className="cards"> */}
                
                <Stack direction='row' justifyContent='space-around' style={{margin: '3% 0'}}>
                    <Box className='listing'>
                        <img src={Rectangle1} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px' }} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>

                    <Box className='listing'>
                        <img src={Rectangle2} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px'}} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>

                    <Box className='listing'>
                        <img src={Rectangle3} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px'}} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>
                </Stack>
                <Stack direction='row' justifyContent='space-around' style={{marginBottom: '3%'}}>
                    <Box className='listing'>
                        <img src={Rectangle1} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px' }} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>

                    <Box className='listing'>
                        <img src={Rectangle2} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px'}} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>

                    <Box className='listing'>
                        <img src={Rectangle3} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '22px'}} alt="" />
                        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
                        <p className='HospitalName'>The Dwarka Hospital</p>
                        <p className='HospitalLocation'> <PlaceOutlinedIcon /> Chandani Chowk, Kothrud, Pune</p>
                        <a href="">Know More</a>
                    </Box>
                </Stack>
                {/* </div> */}
            </div>
        </>
    )
}