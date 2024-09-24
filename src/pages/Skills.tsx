import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { API_PATH } from '../api/apiConstants';
import { apiGet } from '../api/apiService';

// Custom styles
const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(2),

  },
  titleContainer: {
    marginBottom: theme.spacing(3),
  },
  skillCategory: {
    padding: theme.spacing(2),
    border: 'solid 1px #eee',
    background: '#fff',

  },
  chip: {
    margin: theme.spacing(0.5),
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
}));

interface SkillsData {
  [category: string]: string[];
}

const Skills: React.FC = () => {
  const classes = useStyles();
  const [skillsData, setSkillsData] = useState<SkillsData[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiGet<SkillsData[]>(API_PATH.get.skillsUrl);
        setSkillsData(response);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchSkills();
  }, [])

  return (
    <>
      <div className={`${classes.titleContainer}`}>
        <Typography variant="button" component="h1" className={classes.sectionTitle} gutterBottom>
          Skills
        </Typography>
        <Typography variant="body2" gutterBottom>
          I am a full-stack developer with extensive experience in Java, React, Angular, and Spring Boot. Recently, I’ve been working with AWS, Quarkus 3, and distributed monitoring tools, leveraging my skills to create scalable and efficient solutions.
        </Typography>
      </div>
      <div className={classes.section}>
        <Grid container>
          {skillsData.map((skillsDataMap, index) => (
            <>
              {Object.keys(skillsDataMap).map((category) => {
                return (
                  <Grid item xs={12} md={6} key={category} className={classes.skillCategory}>
                    <Typography variant="overline" className={classes.sectionTitle} color='primary' gutterBottom>
                      {category}
                    </Typography>
                    <div>
                      {skillsDataMap[category].map((skill, index) => (
                        <Chip key={index} label={skill} variant='outlined' color='default' className={classes.chip} />
                      ))}
                    </div>
                  </Grid>
                );
              })}
            </>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Skills;
