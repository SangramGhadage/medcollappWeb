import { Grid, Card, CardMedia, Box } from '@mui/material';
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
                {/* <div className="cards"> */}
                    <Grid container spacing={2} justifyContent= 'center' alignItems='center' direction='row'style={{paddingLeft: '30px'}}>
                        <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
                        <Card className='card'>
                                    <img src={country1} alt="" className='image' />
                                    <p className= 'countryName'>Rome</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Card className='card'>
                                    <img src={newyork} alt="" className='image' />
                                    <p className= 'countryName'>NewYork</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Card className='card'>
                                    <img src={Manchester} alt="" className='image' />
                                    <p className= 'countryName'>Manchester</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
                            <div>
                                <Card className='card'>
                                    <img src={Delhi} alt="" className='image' />
                                    <p className= 'countryName'>New Delhi</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent= 'center' alignItems='center' direction='row'style={{paddingLeft: '30px', marginTop: '2%', paddingBottom: '2%'}}>
                        <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
                        <Card className='card'>
                                    <img src={SaudiArab} alt="" className='image' />
                                    <p className= 'countryName'>SaudiArab</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Card className='card'>
                                    <img src={country1} alt="" className='image' />
                                    <p className= 'countryName'>Rome</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Card className='card'>
                                    <img src={Manchester} alt="" className='image' />
                                    <p className= 'countryName'>Manchester</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
                            <div>
                                <Card className='card'>
                                    <img src={Delhi} alt="" className='image' />
                                    <p className= 'countryName'>New Delhi</p>
                                    <p className= 'specialities'>50 Specialities</p>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                {/* </div> */}
            </div>
        </>
    )
}