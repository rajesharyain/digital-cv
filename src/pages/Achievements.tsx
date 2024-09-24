import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { apiGet } from '../api/apiService';
import { API_PATH } from '../api/apiConstants';

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


interface Achievement {
  title: string;
  company: string;
  period: string;
  awrard: string;
}

const Achievements: React.FC = () => {
  const classes = useStyles();
   const [achievements, setAchievements] = useState<Achievement[]>([]);
  
  useEffect(()=>{
      const fetchAchievements = async () => {
          try{
              const response = await apiGet<Achievement[]>(API_PATH.get.achievmentsUrl);
              //console.log(handleResponse(response));
              setAchievements(response);
          }
          catch(error){
            console.error('Error fetching data:', error);
          }
      }
      fetchAchievements();
  }, []) 


  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.bold} gutterBottom>
        Achievements
      </Typography>

      {achievements.map((achievement, index) => (
        <div key={index}>
          <Card className={classes.card} >
            <CardContent>
              <Typography variant="h6" className={classes.bold}>
               {achievement.title}
               </Typography>
              <Typography variant="body1">
                  <span className={classes.companyName}>{achievement.company}:</span> 
                   &nbsp;{achievement.awrard}
                <br />
                <Typography variant="body2" color="textSecondary">
                  {achievement.period}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
         
        </div>
      ))}
      {/* <Grid item xs={12}>
      
          <Card className={classes.card} >
            <CardContent>
              <Typography variant="h6" className={classes.bold}>
                ACE AWARD
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
       
      </Grid> */}

    </div>
  );
};

export default Achievements;
function handleResponse(response: any[]): any {
  throw new Error('Function not implemented.');
}

