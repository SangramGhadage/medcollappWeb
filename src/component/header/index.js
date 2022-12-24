import { Grid, TextField, Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './header.css'
import vector from '../../assets/freepik--character-2--inject-44.png'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
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
                    <Grid item xs={12} justifyContent='center' style={{ width: '100%', marginBottom: '7%' }}>
                        <Grid container className='headerform' style={{ width: '93%', marginLeft: '3%', borderRadius: '40px', backgroundColor: 'rgb(250 252 255 / 38%)', fontWeight: '500' }}>

                            <Grid item xs={7.5}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h2 className='formHeading'>Start your search here...</h2>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='formPara'>Search for disease,Treatment,Illness.*</p>
                                        <div style={{ position: 'relative', left: '36px', top: '-25px' }}>
                                            <TextField className={classes.textField} placeholder='search Disease/Treatment/Illness' id="outlined-basic" variant="outlined" size="small"
                                                sx={{ height: 48 }} inputProps={{ sx: { height: 32 } }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment>
                                                            <SearchIcon style={{ color: '#a2a2a2' }} />
                                                            {/* <img src={searchIcon} alt="" /> */}
                                                        </InputAdornment>
                                                    )
                                                }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} textAlign='start'>
                                        <p className='formPara' style={{ left: '0' }}>What will be required location ?</p>
                                        <div style={{ position: 'relative', top: '-25px' }}>
                                            <TextField sx={{ height: 48 }} placeholder='search Disease/Treatment/Illness' inputProps={{ sx: { height: 32 } }} className={classes.textField} id="outlined-basic" variant="outlined" size="small" InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <ExpandMoreOutlinedIcon style={{ color: '#a2a2a2' }} />
                                                        {/* <img src={searchIcon} alt="" /> */}
                                                    </InputAdornment>
                                                ),
                                                startAdornment: (
                                                    <InputAdornment>
                                                        <SearchIcon style={{ color: '#a2a2a2' }} />
                                                        {/* <img src={searchIcon} alt="" /> */}
                                                    </InputAdornment>
                                                )
                                            }} />

                                            <img className='searchIcon' style={{ backgroundColor: '#0880e9', borderRadius: '10px', padding: '14px', marginLeft: '7%' }} class src={searchIcon} alt="" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <hr style={{ borderTop: '0.5px solid #ffffff14', marginLeft: '1%' }} />
                                <Grid item xs={12} style={{ textAlign: 'center' }}>
                                    <div >
                                        {/* <p style={{}}>Advanced Search</p> */}
                                        <Button className={classes.btn} style={{ marginBottom: '2%' }}>Advanced Search <span style={{ paddingLeft: '11px', paddingTop: '5px' }}><TuneIcon /></span></Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={4.5} className='join' style={{ backgroundColor: '#ffffff', height: '250px' }}>
                                <Grid container style={{ height: '100%', textAlign: 'center' }}>
                                    <Grid item xs={4}>
                                        <img src={vector} alt="" style={{ width: '100%', height: '118%', objectFit: 'cover', position: 'relative', top: '-55px', right: '-19px' }} />
                                    </Grid>
                                    <Grid item xs={8} >
                                        <p style={{ paddingTop: '12%', fontSize: '1rem', fontWeight: 'bold' }}>Want To Grow Your Buisness ?</p>
                                        <p style={{ color: '#00C5CC', fontSize: "1.37rem", fontWeight: 'bold' }}>Join Us Today !</p>
                                        <Button className={classes.applybtn}>Add Yours</Button>
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
        width: '80%',
        borderRadius: '8px'
    },
    btn: {
        backgroundColor: 'rgba(19, 127, 255, 0.1) !important',
        color: '#137FFF !important',
        fontSize: '1rem !important',
        letterSpacing: '0.1em !important',
        fontStyle: 'normal',
        fontWeight: 400,
        marginBottom: '2%',
        marginTop: 10,
        borderRadius: '12px !important',
        width: '229px',
        height: '48px',
        textTransform: 'none !important'
    },
    applybtn: {
        textTransform: 'none !important',
        backgroundColor: '#137FFF !important',
        color: '#fff !important',
        width: '113px',
        height: '40px',
        fontSize: '1rem !important',
        boxShadow: '0px 3px 12px rgba(19, 127, 255, 0.2)',
        borderRadius: '10px !important'

    }
}));