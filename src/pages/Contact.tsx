import React, { useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    /*  maxWidth: 600, */
    /*   margin: 'auto', */
    padding: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left" className={classes.bold} gutterBottom>
        Contact Information
      </Typography>

      {/* <Paper className={classes.paper}>
        <Typography variant="button" className={classes.bold}>
          Networking
        </Typography>

        <ul>
          <li>
            <Typography variant="overline">
              <a href="https://leetcode.com/user6937Xv/" className={classes.link}>LeetCode Profile</a>
            </Typography>
          </li>
          <li>
            <Typography variant="overline" >
              <a href="https://linkedin.com/in/rajesharyain" className={classes.link}>LinkedIn Profile</a>
            </Typography>
          </li>

          <li>
            <Typography variant="overline" >
              <a href="https://github.com/rajesharyain" className={classes.link}>Github Profile</a>
            </Typography>
          </li>

        </ul>

      </Paper> */}
      <Grid container spacing={3}>


        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="button" className={classes.bold}>
              Work Preferences
            </Typography>

            {/*  <Typography variant="subtitle2" className={classes.bold}>
              Open for Remote Work:
            </Typography>
            <Typography variant="body2">Yes</Typography> 
            <Typography variant="subtitle2" className={classes.bold}>
              Interested Locations:
            </Typography>*/}
            <List>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Remote Work" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Europe" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="United Kingdom" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="USA" />
              </ListItem>
            </List>
            <Typography variant="button" className={classes.bold}>
              Hourly Charges:
            </Typography>
            <Typography variant="body1">$50/hour</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="button" className={classes.bold}>
              Personal Details
            </Typography>

            <Typography variant="subtitle2">
              Email: <a href="mailto:rkumar.arya@yahoo.com" className={classes.link}>
                rkumar.arya@yahoo.com
              </a>
            </Typography>
            {/* <Typography variant="body1">
              <a href="mailto:rkumar.arya@yahoo.com" className={classes.link}>
                rkumar.arya@yahoo.com
              </a>
            </Typography> */}
            <Typography variant="subtitle2">
              Phone: +351 936522007
            </Typography>
            {/*  <Typography variant="body1">
              <a href="tel:+917973609040" className={classes.link}>
                +91 7973609040
              </a>
            </Typography> */}
            <Typography variant="subtitle2">
              Location: Lisbon, Portugal
            </Typography>
            {/*  <Typography variant="body1">Pune, India</Typography> */}
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
};

export default Contact;
