import { Grid, TextField, Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './header.css'
import vector from '../../assets/freepik--character-2--inject-44.png'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import searchIcon from '../../assets/searchicon.png'

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <div id="header">
                <Grid container >
                    <Grid item xs={12}>
                        <h1 className='headerh1'>Find best possible abroad <br /> treatment deals...!</h1>
                        <p className='headerpara'>Find awesome Hospitals,Doctors,Travel Agencies & Many other at <br /> one place together.</p>
                    </Grid>
                    <Grid item xs={12} justifyContent='center' style={{ width: '100%', marginBottom: '4%' }}>
                        <Grid container className='headerform' style={{ width: '93%', marginLeft: '3%', borderRadius: '40px', backgroundColor: 'rgb(250 252 255 / 38%)', fontWeight: '500' }}>

                            <Grid item xs={8}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h2 className='formHeading'>Start your search here...</h2>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p style={{ paddingLeft: '7%' }}>Search for disease,Treatment,Illness.*</p>
                                        <div style={{ paddingLeft: '7%' }}>
                                            <TextField className={classes.textField} id="outlined-basic" label="search disease" variant="outlined" size="small" InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <SearchIcon />
                                                        {/* <img src={searchIcon} alt="" /> */}
                                                    </InputAdornment>
                                                )
                                            }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>What will be required location ?</p>
                                        <div >
                                            <TextField className={classes.textField} id="outlined-basic" label="search disease" variant="outlined" size="small" />
                                            <img className='searchIcon' style={{backgroundColor: '#0880e9', borderRadius: '10px', padding: '10px', marginLeft: '4%'}} class src={searchIcon} alt="" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <hr style={{ border: '0.5px solid #ffffff' }} />
                                <Grid item xs={12} style={{ textAlign: 'center' }}>
                                    <div >
                                        {/* <p style={{}}>Advanced Search</p> */}
                                        <Button className={classes.btn} style={{ marginBottom: '2%' }}>Advanced Search <span style={{ paddingLeft: '11px', paddingTop: '5px' }}><TuneIcon /></span></Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} className='join' style={{ backgroundColor: '#ffffff', }}>
                                <Grid container style={{ height: '100%', textAlign: 'center' }}>
                                    <Grid item xs={4}>
                                        <img src={vector} alt="" style={{ width: '100%', height: '134%', objectFit: 'cover', position: 'relative', top: '-53px', right: '-19px' }} />
                                    </Grid>
                                    <Grid item xs={7} >
                                        <p style={{ paddingTop: '3%' }}>Want To Grow Your Buisness ?</p>
                                        <p style={{ color: '#00C5CC', fontSize: "1.2rem", }}>Join Us Today !</p>
                                        <Button variant='contained'>Add Yours</Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
const useStyles = makeStyles(() => ({
    textField: {
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        backgroundColor: '#ffffff !important',
        width: '60%',
        // paddingLeft: '4%'
    },
    btn: {
        backgroundColor: 'rgba(19, 127, 255, 0.1) !important',
        color: '#137FFF !important',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 400,
        marginBottom: '2%',
        marginTop: 10
    }

}));