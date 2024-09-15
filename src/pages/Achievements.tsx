import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing(3),
  },
  card: {
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  bold: {
    fontWeight: 'bold',
  },
  companyName: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

const Achievements: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.bold} gutterBottom>
        Achievements
      </Typography>

      <Grid item xs={12}>
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h6" className={classes.bold}>
        ACE Award
      </Typography>
      <Typography variant="body1">
        <span className={classes.companyName}>Accenture:</span> Recieved A.C.E (Accepting the Challenge of Excellence) award two times at Accenture India.
        <br />
        <Typography variant="body2" color="textSecondary">
          (01/2014 - 10/2018)
        </Typography>
      </Typography>
    </CardContent>
  </Card>
</Grid>

    </div>
  );
};

export default Achievements;
