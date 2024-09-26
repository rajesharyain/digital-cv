import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { apiGet } from '../api/apiService';
import { API_PATH } from '../api/apiConstants';

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

interface ContactProps {
  name: string,
  email: string,
  location: string,
  contactNbr: string,
  workPreference: string[],
  hourlyCharges: string
}
const Contact: React.FC = () => {
  const classes = useStyles();

   const [contact, setContact] = useState<ContactProps>();
  
  useEffect(()=>{
      const fetchContact = async () => {
          try{
              const response = await apiGet<ContactProps>(API_PATH.get.contactUrl);
              //console.log(handleResponse(response));
              setContact(response);
          }
          catch(error){
            console.error('Error fetching data:', error);
          }
      }
      fetchContact();
  }, []) 


  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left" className={classes.bold} gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>

        {contact && 
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="button" className={classes.bold}>
              Work Preferences
            </Typography>
            <List>
            {contact && contact.workPreference.map((pref, index) => (

                <ListItem key={index} className={classes.listItem}>
                  <ListItemText primary={pref} />
                </ListItem>
             
            ))}
             </List>
             {contact && contact.hourlyCharges &&
              <Typography variant="button" >
                <span className={classes.bold}>Hourly Charges:</span> {contact.hourlyCharges}
              </Typography>
             }
            {/* <Typography variant="body1">$50/hour</Typography> */}
          </Paper>
        </Grid>
      }
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="button" className={classes.bold}>
              Personal Details
            </Typography>

            <Typography variant="subtitle2">
              Email: <a href="mailto:rkumar.arya@yahoo.com" className={classes.link}>
                {contact?.email}
              </a>
            </Typography>
            {/* <Typography variant="body1">
              <a href="mailto:rkumar.arya@yahoo.com" className={classes.link}>
                rkumar.arya@yahoo.com
              </a>
            </Typography> */}
            <Typography variant="subtitle2">
              Phone: {contact?.contactNbr}
            </Typography>
            {/*  <Typography variant="body1">
              <a href="tel:+917973609040" className={classes.link}>
                +91 7973609040
              </a>
            </Typography> */}
            <Typography variant="subtitle2">
              Location:  {contact?.location}
            </Typography>
            {/*  <Typography variant="body1">Pune, India</Typography> */}
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
};

export default Contact;
