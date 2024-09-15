import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

// Custom styles
const useStyles = makeStyles((theme) => ({
  section: {
   marginTop: theme.spacing(2),
   
  },
  titleContainer:{
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
  sectionTitle:{
    textTransform:'uppercase',
    fontWeight:600,
},
}));

// Skills data categorized into Frontend, Backend, DevOps, Databases, and Tools
const skillsData = {
  Frontend: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML5', 'CSS', 'jQuery', 'Angular 2/4/6'],
  Backend: ['Core Java', 'Multithreading','Executor Framework','Java8', 'Java 17','Spring MVC', 'Quarkus 3 framework','Spring Boot 2.5', 'Spring Data JPA', 'Node.js', 'Rest API', 'Hibernate'],
  AWS: ['AWS Fargate', 'Cloudwatch', 'CloudTrail', 'AWS Cost Optimization', 'EC2', 'ECS', 'Terraform', 'kinesis ', 'RDS'],
  Monitoring: ['Opentelemetry', 'Jaeger', 'Splunk', 'Grafana', 'Kibana'],
  DevOps: ['Jenkins', 'Docker', 'Openshift', 'Apache Web Server', 'Nginx', 'JBoss 6.1+', 'Gradle', 'Maven'],
  Databases: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle 11g'],
  Tools: ['Git', 'Bitbucket', 'Swagger', 'PostMan', 'Eclipse', 'intellij idea', 'webstorm', 'Visualstudio', 'draw.io', 'visio'],
 
};

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
    <div className={`${classes.titleContainer}`}>
       <Typography variant="button" component="h1" className= {classes.sectionTitle} gutterBottom>
        Skills
      </Typography>
      <Typography variant="body2" gutterBottom>
        I am a full-stack developer with extensive experience in Java, React, Angular, and Spring Boot. Recently, I’ve been working with AWS, Quarkus 3, and distributed monitoring tools, leveraging my skills to create scalable and efficient solutions.
      </Typography>
    </div>
    <div className={classes.section}>
     
      <Grid container>
        {Object.keys(skillsData).map((category) => {
          const typedCategory = category as keyof typeof skillsData;
          return (
            <Grid item xs={12} md={6} key={typedCategory} className={classes.skillCategory}>
              <Typography variant="overline" className={classes.sectionTitle} color='primary' gutterBottom>
                {typedCategory}
              </Typography>
              <div>
                {skillsData[typedCategory].map((skill, index) => (
                  <Chip key={index} label={skill} variant='outlined' color='default' className={classes.chip} />
                ))}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
    </>
  );
};

export default Skills;
