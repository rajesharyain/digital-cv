// src/components/Menu.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const Menu: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Digital Profile
                </Typography>
               {/*  <Button color="inherit">
                    <Link to="/" className={classes.link}>Home</Link>
                </Button> */}
                <Button color="inherit">
                    <Link to="/" className={classes.link}>Profile</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/experience" className={classes.link}>Experience</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/skills" className={classes.link}>Skills</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/achievements" className={classes.link}>Achievements</Link>
                </Button>
                {/* <Button color="inherit">
                    <Link to="/github-metrics" className={classes.link}>GitHub Metrics</Link>
                </Button> */}
                <Button color="inherit">
                    <Link to="/contact" className={classes.link}>Contact</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
