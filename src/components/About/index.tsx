import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import headshot from '../../assets/images/headshot.jpg';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#f0dde1",
            margin: theme.spacing(3),
            padding: theme.spacing(3),
            container: {
                paddingBottom: theme.spacing(4),
    
            },
        },
        container: {
            paddingBottom: theme.spacing(4),
        },
        img: {
            width: "100%",
        },
        paper: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        textBlock: {
            margin: theme.spacing(1)
        },
        contact: {
            paddingLeft: theme.spacing(1),
            margin: 0
        },
        icons: {
            fontSize: "4rem",
        },
        iconGroup: {
            textAlign: "center"
        },
        email: {
            color: theme.palette.text.secondary,
        }

    })
);

export default function About() {

    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
            <Container className={classes.container}>
                <Typography component="h2" variant="h3" className={classes.heading}>About Me</Typography>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>

                            <img src={headshot}
                                className={classes.img}     alt="Dwayne Risley" />
                        </Paper>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h3" className={classes.heading}>
                                    Contact me:
                                </Typography>
                                <Typography className={classes.contact} variant="body1" paragraph >
                                    <small>Phone: (603) 318-6527</small>
                                </Typography>
                                <Typography className={classes.contact} variant="body1" paragraph >
                                    <small>Email: <a className={classes.email} href="mailto:risleydwayne@gmail.com">RisleyDwayne@gmail.com</a></small>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={8} >
                    <div className={classes.textBlock}>
                            <Typography variant="body1" paragraph={true} >
                                I am a Full-Stack Web Developer with experience in Object-Oriented programming, Game Design, and all manner of web technologies including Javascript and frameworks such as React.
                        </Typography>
                        </div>

                        <Grid container spacing={2} className={classes.iconGroup}>
                            <Grid item xs={4}>
                                {}
                                <IconButton color="primary" href="https://github.com/RisleyDwayne" title="GitHub" target="_blank" >
                                    <i className={`fab fa-github-square ${classes.icons}`}></i>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} >
                                <IconButton color="primary" href="https://www.linkedin.com/in/dwayne-risley/" title="LinkedIn" target="_blank">
                                    <i className={`fab fa-linkedin ${classes.icons}`}></i>
                                </IconButton>

                            </Grid>
                            <Grid item xs={4} >
                                <IconButton color="primary" href="./resume/resume.pdf" title="Resume" target="_blank" download>
                                    <i className={`fas fa-sticky-note ${classes.icons}`}></i>
                                </IconButton>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </section >

    )

}