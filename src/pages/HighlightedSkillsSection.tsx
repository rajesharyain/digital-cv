import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

// Custom styles
const useStyles = makeStyles((theme) => ({
  section: {
   /*  margin: theme.spacing(4, 0), */
   marginTop: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  highlighted: {
    backgroundColor: '#FF5733', // Highlight AWS
    color: '#000',
  },
  angularChip: {
    backgroundColor: '#33FF57', // Highlight Angular
    color: '#000',
  },
  awsChip: {
    backgroundColor: '#3357FF', // Highlight AWS
    color: '#000',
  },
  typescriptChip:{
    backgroundColor: '#F3FF33', // Highlight AWS
    color: '#000',
  }, 
  quarkusChip:{
    backgroundColor: '#FF33F3', // Highlight AWS
    color: '#000',
  }, 
  dockerChip:{
   backgroundColor: '#33F3FF', // Highlight AWS
    color: '#000',
  }, 
  postgresqlChip:{
   backgroundColor: '#F3F3F3', // Highlight AWS
    color: '#000',
  },
}));


interface SkillsProp {
  skills: string[];
}

const HighlightedSkillsSection:React.FC<SkillsProp> = ({skills}) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
     
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {skills && skills.map((skill, index) => {
            let chipClass = classes.chip;
          
            if (skill === 'Java') {
              chipClass = `${classes.chip} ${classes.highlighted} }`;
            } else if (skill === 'Angular') {
              chipClass = `${classes.chip} ${classes.angularChip}`;
            } else if (skill === 'AWS') {
              chipClass = `${classes.chip} ${classes.awsChip}`;
            }
            else if (skill === 'TypeScript') {
              chipClass = `${classes.chip} ${classes.typescriptChip}`;
            }
            else if (skill === 'Quarkus3') {
              chipClass = `${classes.chip} ${classes.quarkusChip}`;
            }
            else if (skill === 'Docker') {
              chipClass = `${classes.chip} ${classes.dockerChip}`;
            }
            else if (skill === 'PostgreSQL') {
              chipClass = `${classes.chip} ${classes.postgresqlChip}`;
            }

            return <Chip key={index} label={skill} className={chipClass} variant='outlined' />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default HighlightedSkillsSection;
