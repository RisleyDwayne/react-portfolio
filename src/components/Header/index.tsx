import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const style = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            marginBottom: 0
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
    })
);

export default function Header() {

    const classes = style();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Dwayne Risley
                     </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Skills</Button>
                    <Button color="inherit">Portfolio</Button>
                </Toolbar>
            </AppBar>
        </div>

    )

}