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
                <Grid container spacing={2} style={{ marginBottom: '2%' }}>
                    <Grid item xs={6} style={{ textAlign: 'end', }}>
                        <Box style={{  width: '20%', paddingLeft: '60%' }}>
                            <div className="container">
                                <div className="relationship">
                                    <div className="img">
                                        <img src={relationship} alt="" />
                                    </div>
                                    <div className="">
                                        <p style={{marginTop: '8px'}}>Companies</p>
                                    </div>
                                </div>
                                <div className='count'>
                                        <p style={{color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500'}}>2000+</p>
                                        <p style={{marginTop: '8px'}}>Medical Tourisam Companies</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                    <Box style={{  width: '20%',  }}>
                            <div className="container">
                                <div className="relationship" style={{width: '40%'}}>
                                    <div className="img">
                                        <img src={kidney} alt="" />
                                    </div>
                                    <div className="">
                                        <p style={{marginTop: '8px'}}>Diseases</p>
                                    </div>
                                </div>
                                <div className='count'>
                                        <p style={{color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500'}}>2000+</p>
                                        <p style={{marginTop: '8px'}}>Registred Diseases</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: '2%' }}>
                    <Grid item xs={6} style={{ textAlign: 'end', }}>
                        <Box style={{  width: '20%', paddingLeft: '60%' }}>
                            <div className="container">
                                <div className="relationship" style={{width: '40%'}}>
                                    <div className="img">
                                        <img src={Doctor} alt="" />
                                    </div>
                                    <div className="">
                                        <p style={{marginTop: '8px'}}>Doctor</p>
                                    </div>
                                </div>
                                <div className='count'>
                                        <p style={{color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500'}}>2000+</p>
                                        <p style={{marginTop: '8px'}}>Doctor Registerd</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                    <Box style={{  width: '20%',  }}>
                            <div className="container">
                                <div className="relationship" style={{width: '40%'}}>
                                    <div className="img">
                                        <img src={hospital} alt="" />
                                    </div>
                                    <div className="">
                                        <p style={{marginTop: '8px'}}>hospital</p>
                                    </div>
                                </div>
                                <div className='count'>
                                        <p style={{color: '#00C4CC', fontSize: '1.1rem', fontWeight: '500'}}>2000+</p>
                                        <p style={{marginTop: '8px'}}>Hospital Enrolled</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}