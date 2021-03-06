import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { projects } from '../../assets/portfolio-items';
import IProject from '../../interfaces/IProject';
import ProjectCard from '../ProjectCard';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#f0dde1",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        }
    })
);

export default function Portfolio() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h2" variant="h3" className={classes.heading}>Portfolio</Typography>
            <hr />
            <Grid container spacing={3}>

                {projects.map((proj: IProject) => {
                    return <ProjectCard key={proj.id} proj={proj} />
                })}
            </Grid>
        </div>
    )
} 