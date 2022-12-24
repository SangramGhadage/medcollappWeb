import { Grid, Card, CardMedia, Box, Stack } from '@mui/material';
import React from 'react'
import './style.css'
import country1 from '../../assets/country1.png'
import Delhi from '../../assets/Delhi.png'
import newyork from '../../assets/newyork.png'
import Manchester from '../../assets/Monchester.png'
import SaudiArab from '../../assets/Saudi arab.png'

export default function Country() {
    return (
        <>
            <div className="root">
                <div className="heading">
                    <h1>Featured Countries</h1>
                    <h4>Top most health facilated Countries</h4>
                </div>
                <Stack direction='row' justifyContent='space-around' style={{ marginTop: '6%', marginRight: '6%' }}>
                    <Box className='countryBox' style={{}}>
                        <img src={Delhi} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName'>New Delhi</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={Manchester} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-70px' }}>Manchester</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={newyork} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-80px' }}>NewYork</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={country1} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-97px' }}>Rome</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                </Stack>

                <Stack direction='row' justifyContent='space-around' style={{ marginTop: '6%', marginLeft: '6%' }}>
                    <Box className='countryBox' style={{}}>
                        <img src={Delhi} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName'>New Delhi</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={Manchester} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-70px' }}>Manchester</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={newyork} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-80px' }}>NewYork</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                    <Box className='countryBox' style={{}}>
                        <img src={country1} style={{ width: '95%', height: '95%', objectFit: 'cover', borderRadius: '32px', outline: '10px solid #ffffff' }} alt="" />
                        <p className='countryName' style={{ left: '-97px' }}>Rome</p>
                        <p className='specialities'>50 Specialities</p>
                    </Box>
                </Stack>
            </div>
        </>
    )
}