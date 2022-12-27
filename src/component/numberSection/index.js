import React from 'react';
import './number.css'
import { Grid, Card, } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import relationship from '../../assets/relationship.png'
import kidney from '../../assets/kidney-cancer.png'
import Doctor from '../../assets/stethoscope 1.png'
import hospital from '../../assets/hospital.png'

export default function Numbers() {
    return (
        <>
            <div className="root2">
                <div className="heading">
                    <h1>We are in numbers</h1>
                    <h4>Get ready to start your exciting journey with us</h4>
                    <p>Find awesome hospitals,doctors,Travel <br /> Agencies at one click</p>
                </div>
                <Grid container spacing={2} direction={{ xs: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginBottom: '2%' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pl: { lg: '60%', xs: '0' } }} style={{ width: '20%' }}>
                            <div className="container">
                                <div className="relationship" style={{ width: '49%' }} >

                                    <img className="img" src={relationship} alt="" />
                                    <p style={{ margin: '0', fontSize: '0.937rem', color: '#000' }}>Companies</p>
                                </div>
                                <div className='count'>
                                    <p style={{ color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500' }}>2000+</p>
                                    <p style={{}}>Medical Tourisam Companies</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ width: '20%', }}>
                            <div className="container">
                                <div className="relationship" style={{ width: '40%' }}>

                                    <img className="img" src={kidney} alt="" />
                                    <p style={{ margin: '0', fontSize: '0.937rem', color: '#000' }}>Diseases</p>

                                </div>
                                <div className='count'>
                                    <p style={{ color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500', width: '100%', paddingLeft: '11%' }}>2000+</p>
                                    <p style={{}}>Registred Diseases</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction={{ xs: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="center" style={{ marginBottom: '2%' }}>
                    <Grid item xs={12} md={6} style={{ textAlign: 'end', }}>
                        <Box sx={{ pl: { lg: '60%', xs: '0' } }} style={{ width: '20%' }}>
                            <div className="container">
                                <div className="relationship" style={{ width: '40%' }}>
                                    <img className="img" src={Doctor} alt="" />
                                    <p style={{ margin: '0', fontSize: '0.937rem', color: '#000' }}>Doctor</p>
                                </div>
                                <div className='count'>
                                    <p style={{ color: '#00C4CC', fontSize: '1.1rem', width: '100%', paddingLeft: '11%', fontWeight: '500' }}>2000+</p>
                                    <p style={{}}>Doctor Registerd</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ width: '20%', }}>
                            <div className="container">
                                <div className="relationship" style={{ width: '40%' }}>

                                    <img className="img" src={hospital} alt="" />
                                    <p style={{ margin: '0', fontSize: '0.937rem', color: '#000' }}>hospital</p>

                                </div>
                                <div className='count'>
                                    <p style={{ color: '#00C4CC', fontSize: '1.1rem', width: '100%', paddingLeft: '11%', fontWeight: '500' }}>2000+</p>
                                    <p style={{}}>Top Hospital Enrolled</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}