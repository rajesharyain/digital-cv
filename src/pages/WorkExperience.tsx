import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Project {
  title: string;
  role: string;
  projectSkills:string;
  details: string[];
}

interface WorkExperienceProps {
  experiences: {
    companyName: string;
    projects: Project[];
  }[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
  },
  companyName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  projectTitle: {
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  role: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(1),
  },
  details: {
    marginTop: theme.spacing(1),
  },
}));

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {experiences.map((experience, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: '1rem' }}>
          <CardContent>
          <Typography variant="subtitle1" className={classes.projectTitle}>
           Professional Experience
         </Typography>
            <Typography variant="h6" className={classes.companyName}>
              {experience.companyName}
            </Typography>
            {experience.projects.map((project, projectIndex) => (
              <div key={projectIndex}>
                <Typography variant="subtitle1" className={classes.projectTitle}>
                  {project.title}
                </Typography>
                <Typography variant="body2" className={classes.role}>
                  Role: {project.role}
                </Typography>
                <Typography variant="body2" className={classes.details}>
                  Project Details:
                </Typography>
                <List>
                  {project.details.map((detail, detailIndex) => (
                    <ListItem key={detailIndex}>
                      <ListItemText primary={`• ${detail}`} />
                    </ListItem>
                  ))}
                </List>
                {projectIndex < experience.projects.length - 1 && <Divider />}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WorkExperience;
