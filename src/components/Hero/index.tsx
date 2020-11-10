import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import hero from '../../assets/images/forest-pic.jpg'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hero: {
            height: 400,
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover"
        },
        title: {
            paddingTop: 275,
            color: "white",
            
        }
    })
);

export default function Hero() {

    const classes = useStyles();

    return (
        <div className={classes.hero}>
            <Container>
                <div className={classes.title}>
                    <Typography variant="h4" component="h1">Dwayne Risley</Typography>
                    <Typography component="h2" variant="h6">Full Stack Developer</Typography>
                </div>
            </Container>
        </div>
    )
} 