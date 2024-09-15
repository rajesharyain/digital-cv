// src/components/HireMeButton.tsx
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const HireMeButton: React.FC = () => {
    const classes = useStyles();

    const handleClick = () => {
        window.alert('Thank you for your interest!');
        // Here you can add the logic to handle the button click, such as navigating to a contact form.
    };

    return (
        <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
        >
            Hire Me!
        </Button>
    );
};

export default HireMeButton;
