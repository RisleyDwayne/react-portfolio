import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import headshot from '../../assets/images/headshot.jpg';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#f0dde1",
            margin: theme.spacing(3),
            padding: theme.spacing(3),
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
        }

    })
);

export default function About() {

    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
            <Container>
                <Typography component="h2" variant="h3" className={classes.heading}>About Me</Typography>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>

                            <img src={headshot}
                                className={classes.img} alt="image of Dwayne Risley" />
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={8} >
                    <div className={classes.textBlock}>
                            <Typography variant="body1" paragraph={true} >
                                I am a Full-Stack Web Developer with experience in Object-Oriented programming, Game Design, and all manner of web technologies including Javascript and frameworks such as React.
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container >
        </section >

    )

}