import React from 'react';
import { makeStyles, Paper, Typography, Avatar as MuiAvatar, withStyles, Button, useMediaQuery, useTheme, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Experience } from '../components/profile/experienceProps';

/* const currentExperience: Experience = {
  companyName: 'Aubay | Critical TechWorks.',
  duration: '01/2024 - Present',
  entitle: 'Senior Consultant',
  location: 'Lisbon, Portugal',
  clientLogo: 'company/ctw_logo.svg',
  clientName: 'Critical TechWorks',
  companyLogo: 'company/aubay_logo.svg',
  projects: [
    {
      title: 'MCO - Multi channel Offers',
      role: 'Java Backend Developer with end-to-end responsibilities from development to deployment',
      details: [
        'Independently developed the new microservice using Quarkus framework to onboard new channel in the MCO project.',
        'Implemented the Quarkus Cache mechanism to prevent redundant requests, improving application performance.',
        'Conducted code reviews and implemented best practice with SOLID principles, leveraging static code analyzer via SonarQube.',
        'Involved in AWS cost optimization, leveraging AWS cost optimization tools to scale down unused resources and reduce costs, while ensuring the application runs smoothly.',
        'Automated enabling of the AWS RDS `pgaudit` extension using Terraform, enhancing database auditing.',
        'Worked in an Agile model with 2-week sprints, including sprint planning, standups, and reviews.',
        'Implemented OpenTelemetry and Jaeger for distributed tracing and monitoring of microservices.',
        'Frontend: Implemented Cypress code coverage for the frontend and integrated it with Sonar.',
        'Optimized the frontend app using Lighthouse devtool metrics.',
      ],
    },
    {
      title: 'Quarkus Migration',
      role: 'Java Developer',
      details: [
        'Independently managed the migration of services from Quarkus 2 to Quarkus 3 within one sprint.',
        'Handled the major impact of Hibernate-ORM during migration.',
        'Addressed custom serialization/deserialization using JSON-B binding, ensuring no functionality impact.',
        'Fixed unit tests and integration tests associated with migration.',
        'Experienced with Docker and DevOps practices, using Terraform to modify resources on AWS.',
      ],
    },
  ],
}; */

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(2),
    position: 'relative',
  
  },
  mainContainer:{
    marginTop: '8px',
  },
  companyLogo: {
    maxWidth: 200,
    maxHeight: 48,
    objectFit: 'contain',
    marginBottom: theme.spacing(0.5),
  },
  clientLogo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 8,
    right: 8,
    objectFit: 'contain',
  },
  companyNameContainer: {
    marginBottom: theme.spacing(2),
  },
  companyName: {
    fontWeight: 'bold',
  },
  projectTitle:{
    fontWeight: 'bold',
  },
  entitle: {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
  },
  viewAllButton: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  currentActivity:{
    marginLeft: '-20px',
    marginTop: '5px'
  },
  currentActivityItem:{
    lineHeight: '2.2rem'
  },
}));

const CustomAvatar = withStyles({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    backgroundColor: 'transparent',
  },
})(MuiAvatar);

//export default function CurrentActivity() {
const CurrentActivity: React.FC<Experience> = ({...currentExperience}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   <div className={classes.paper}>
      {/* Display the company and client logos */}
      {!isMobile && currentExperience.clientLogo && (
        <img
          src={currentExperience.clientLogo}
          alt={`${currentExperience.companyName} client logo`}
          className={classes.clientLogo}
        />
       
      )}

     {/*  <div className={classes.companyNameContainer}>
        {currentExperience.companyLogo && (
          <img
            src={currentExperience.companyLogo}
            alt={`${currentExperience.companyName} logo`}
            className={classes.companyLogo}
          />
        )}
      </div> */}

{/* <Typography variant="h6"> Current Organazation</Typography> */}
   
   {
    currentExperience && (
      <>
      <Typography variant="h6" component="h1" className={classes.companyName}>
        {currentExperience.companyName}
      </Typography>

      <Typography variant="subtitle1" className={classes.entitle}>
        {currentExperience.entitle} - {currentExperience.location}
      </Typography>  
         <Divider></Divider>              
      </>

    )

   }
      
      
      
      {/* List of projects */}
      {currentExperience && currentExperience.projects && currentExperience.projects.map((project, projectIndex) => (
        <div key={projectIndex} className={classes.mainContainer}>
         
          <Typography variant="subtitle1">
            <span>Project</span>: {project.title}
          </Typography>

          <Typography variant='caption' >
              {project.projectSkills}
          </Typography>


          <ul className={classes.currentActivity}>
            {project.details.map((detail, detailIndex) => (
              <li key={detailIndex} className={classes.currentActivityItem}>
                <Typography variant="body2">{detail}</Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
  );
}
export default CurrentActivity;

