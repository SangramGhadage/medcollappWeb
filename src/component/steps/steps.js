import { Grid } from '@mui/material';
import React from 'react';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { makeStyles } from '@material-ui/core/styles';
import deal from '../../assets/deal 1.png';
import report from '../../assets/upload.png';
import appointment from '../../assets/appointment.png';
import healthcare from '../../assets/healthcare (2).png'

export default function Steps() {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ marginTop: '-5%' }}>
                    <h1 className={classes.stepheading1} style={{}}>Steps to plan which in your mind <ArrowRightRoundedIcon style={{ fontSize: '60px', position: 'relative', top: '20px', left: '-10px', color: '#000000' }} /></h1>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <h1 className={classes.stepheading2}>How can I make support general partners investing <br />in private equity ?</h1>
                </Grid>
            </Grid>
            <Grid container
                style={{ display: 'flex', width: '70%', justifyContent: 'center', alignContent: 'center', margin: '21px 14.5%' }}>
                <Grid item xs={12} md={3} direction='row'>
                    <div className={classes.deal} style={{}}>
                        <div className={classes.outercircle}>
                            <div className={classes.innercircle}>
                                <img src={deal} alt="" />
                            </div>
                        </div>
                        <h4>Find Best Deals</h4>
                        <p>Automatically produce industry standard reports & custom templates, in order to seamlessly share information with service providers.</p>
                    </div>
                    <hr className={classes.line}/>
                </Grid>
                <Grid item xs={12} md={3} direction='row'>
                    <div className={classes.deal} style={{}}>
                        <div className={classes.outercircle}>
                            <div className={classes.innercircle}>
                                <img src={report} alt="" />
                            </div>
                        </div>
                        <h4>Upload Reports</h4>
                        <p>Automatically produce industry standard reports & custom templates, in order to seamlessly share information with service providers.</p>
                    </div>
                    <hr className={classes.line}/>
                </Grid>
                <Grid item xs={12} md={3} direction='row'>
                    <div className={classes.deal} style={{}}>
                        <div className={classes.outercircle}>
                            <div className={classes.innercircle}>
                                <img src={appointment} alt="" />
                            </div>
                        </div>
                        <h4>Get Appointment</h4>
                        <p>Automatically produce industry standard reports & custom templates, in order to seamlessly share information with service providers.</p>
                    </div>
                    <hr className={classes.line}/>
                </Grid>
                <Grid item xs={12} md={3} direction='row'>
                    <div className={classes.deal} style={{}}>
                        <div className={classes.outercircle}>
                            <div className={classes.innercircle}>
                                <img src={healthcare} alt="" />
                            </div>
                        </div>
                        <h4>Get Treated Well</h4>
                        <p>Automatically produce industry standard reports & custom templates, in order to seamlessly share information with service providers.</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
const useStyles = makeStyles(() => ({
    stepheading1: {
        fontSize: '2.2rem',
        fontFamily: 'poppins, sans-serif',
        color: '#00C5CC',
        fontWeight: '500',
        margin: '0',
        marginLeft: '10%'
    },
    stepheading2: {
        fontSize: '2rem',
        color: '#000000',
        fontWeight: '500',
        fontFamily: 'poppins, sans-serif'
    },
    deal: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2% 0',
        textAlign: 'center',
        '& p': {
            margin: '0',
            fontFamily: 'poppins, sans-serif',
            fontSize: '0.8rem',
            fontWeight: '400'
        },
        '& h4': {
            fontFamily: 'poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0'
        }
    },
    outercircle: {
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        border: '1px dashed #666666'
    },
    innercircle: {
        width: '124px',
        height: '124px',
        position: 'relative',
        top: '8px',
        left: '8px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 196, 204, 0.11)',
        '& img': {
            width: '66%',
            height: '66%',
            objectFit: 'cover',
            position: 'relative',
            top: '19%',

        },
    },
    line: {
        width: '44%',
        borderTop: '1px dashed black',
        position: 'relative',
        top: '-67%',
        left: '40%',
        ['@media (max-width:895px)']: {
            borderLeft: '1px dashed black',
            height: '10%',
            top: '-5%',
            left: '-10%',
            width: '0'
        }
    }

}));