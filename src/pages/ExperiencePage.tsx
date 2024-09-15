import React from 'react';
import { makeStyles, Paper, Typography, Avatar as MuiAvatar, withStyles } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { relative } from 'path';

const useStyles = makeStyles((theme) => ({
    img: {
        objectFit: 'contain',
    },
    paper: {
        padding: '6px 16px',
        marginBottom: theme.spacing(2),
        position: 'relative', // Allow absolute positioning within Paper
    },
    timelineContent: {
        padding: '12px 0',
    },
    timelineDot: {
        marginLeft: '0px',
        width: 56, // Size of the dot
        height: 56, // Size of the dot
        backgroundColor: 'transparent', // Transparent background
        boxShadow: 'none', // Remove any shadow from TimelineDot
    },
    timelineLine: {
        margin: 0,
        padding: 0,
    },
    timelineItem: {
        '&:before': {
            display: 'none', // This removes the default line spacing before each item.
        },
    },
    timelineContentWrapper: {
        paddingLeft: theme.spacing(2),
        position: 'relative',
    },
    companyLogo_1: {
        maxWidth: 200,
        maxHeight: 48,

        objectFit: 'contain',
        marginBottom: theme.spacing(0.5),
    },
    companyLogo: {
        width: '100%', // Make sure the avatar takes the full width of the dot
        height: '100%', // Make sure the avatar takes the full height of the dot
        objectFit: 'contain', // Ensure the logo fits inside the avatar and maintains aspect ratio
        backgroundColor: 'transparent',
        fontSize: '24px', // Adjust font size to ensure visibility
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyNameContainer: {
        position:'relative',
       /*  display: 'flex',
        alignItems: 'center', // Align items inline
        marginTop: theme.spacing(1), */
    },
    avatarInitial: {
        backgroundColor: 'transparent', // Ensure background is transparent
        color: '#000', // Set the color for the first letter
        fontWeight: 'bold',
    },
    clientLogo: {
        width: 40,
        height: 40,
        position: 'relative',
        top: 8,
        right: 8,
        objectFit: 'contain',
        marginBottom: theme.spacing(0.5),
    },
    companyName: {
        fontWeight: 'bold',
    },
    entitle: {
        fontSize: '0.9rem', // Smaller font size for entitle
        color: theme.palette.text.secondary, // Distinguish entitle from the company name
    },
  
  
}));

const experiences = [
    {
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
                    'Independently developed the new microservice using Qurkus framework to onboard new channel in the MCO project.',
                    'implemented the Quarkus Cache mechanism to prevent redundant requests, improving application performance.',
                    'Conducted code reviews and implemented best practice with SOLID principles, leveraging static code analyzer via SonarQube.',
                    'Involved in AWS cost optimization, We leverage AWS cost optimization tools to scale down unused resources and reduce costs, all while ensuring that the existing application continued to run smoothly.',
                    'AWS: Automated the enabling of the AWS RDS `pgaudit` extension using Terraform, streamlining the process and enhancing our database auditing capabilities',
                    'Agile Methodology: Working in an Agile model with 2-week sprints, including sprint planning, sprint refinements, standups and retrospectives. Also responsible for presenting our work during the sprint reviews.',
                    'Worked on OpenTelemetry and Jaeger for distributed tracing and monitoring of our microservices. Was responsible for creating some regex patterns for our response payloads in our OpenTelemetry configuration so that we can only send the matrices what we want to see on the Splunk dashboard',
                    'We conduct some brainstorming sessions to understand underlying complexities of the tasks, identify bottlenecks, design, and implement solutions.',
                    'Frontend: Took on the challenge of implementing Cypress code coverage for the frontend and generated the report for integration with Sonar.',
                    'Optimized the frontend app using lightspeed devtool metrices.',
                ],
            },
            {
                title: 'Quarkus Migration',
                role: 'Java Developer',
                details: [
                    'Independently managed the migration of our services from Quarkus 2 to Quarkus 3 within one sprint..',
                    'Gracefully handled the major impact of Hibernate-ORM during this migration by following the migration guide.',
                    'Addressed a significant issue related to custom serialization/deserialization written using JSON-B binding, ensuring no impact on the current functionality of the application.',
                    'Fixed unit tests and integration tests associated with this change.',
                    'DevOps: Experienced with Docker and DevOps practices. I have used tools like Terraform to perform this on AWS for any resource modification/addition.'
                ],
            }
        ],
    },
    {
        companyName: 'Citicorp Services Private Ltd.',
        duration: '10/2019 - 01/2024',
        entitle: 'Java Fullstack developer',
        location: 'Pune, India',
        clientLogo: '',
        clientName: '',
        companyLogo: 'company/citi_logo.svg',
        projects: [
            {
                title: 'Citi Ventures',
                role: 'AVP',
                details: [
                    'Migrated Angular application to React 16.',
                    'Integrated Memcached distributed caching systems.',
                    'Involved in creating the lightspeed jenkins pipeline to automate build and deployment.',
                    'Involved in remediating vulnurablaities reported in BlackDuck and Sonarqube scan',
                    'Optimized the frontend app using lightspeed devtool metrices.',
                ],
            }
        ],
    },
    {
        companyName: 'Mphasis',
        duration: '10/2018 - 10/2019',
        entitle: 'Module Lead',
        location: 'Pune, India',
        clientLogo: 'company/bny_logo.svg',
        clientName: 'BNY Mellon',
        companyLogo: 'company/mphasis_logo.svg',
        projects: [
            {
                title: 'Alternative Investment services',
                role: 'Module Lead',
                details: [
                    'Worked on enterprise applications.',
                    'Enhanced user interfaces.',
                    'Provided technical support.',
                ],
            },
        ],
    },
    {
        companyName: 'Accenture, India',
        duration: '01/2014 - 10/2018',
        entitle: 'Team Lead',
        location: 'Pune, India',
        clientLogo: '',
        clientName: '',
        companyLogo: '/company/Accenture_logo.svg',
        projects: [
            {
                title: 'COX & Communication',
                role: 'Team Lead',
                details: [
                    'Designed and developed the application using spring boot, spring data, oracle, Angular 2 framework along with HTML5, CSS3, Type Script, Java Script, Bootstrap, PrimeNG',
                    'Enhanced user interfaces.',
                    'Optimized backend services.',
                    'Involved in Architecturing the  Monotlithick application to Microservice based application'
                ],
            },
            {
                title: 'E-Licensing System Implementation, Massachusett',
                role: 'Senior Software Engineer(Accela developer)',
                details: [
                    'Designed and developed a Portal (KRDH) for the State of Karnataka to provide a resident data hub for the state citizens. It was designed to provide all the latest news and schemes introduced by the State Government. Feature implementations done on UI front for module demos.',
                    'Worked on E-Licensing System Implementation for State of Massachusett using a well known civic platform called Accela. Developed Scripts in JavaScript that helps Accela tools to generate SSN/License/Permit related records'
                ],
            },
        ],
    },
    {
        companyName: 'Entrata',
        duration: '07/2012 - 01/2014',
        entitle: 'Software Engineer',
        location: 'Pune, India',
        clientLogo: '',
        clientName: '',
        companyLogo: 'company/entrata_logo.svg',
        projects: [
            {
                title: 'Rental Property Solution',
                role: 'Software Engineer',
                details: [
                    'Design & developed property solution web app, a Rental domain asset for property managers to automate the rental system for them.',
                ],
            },
        ],
    },
    {
        companyName: 'Smartdata Enterprises',
        duration: '06/2011 - 07/2012',
        entitle: 'Software Engineer',
        location: 'Nagpur, India',
        clientLogo: '',
        clientName: '',
        companyLogo: 'company/smartdata_logo.svg',
        projects: [
            {
                title: 'Vimbly',
                role: 'Software Engineer',
                details: [
                    'Designed & developed a project called "Vimbly" . This is designed to book the local activities happening in your city in a fastest way. It shows the available times for thousands of local activities, date ideas, and things to do any of which can be booked directly with a best price guarantee.',
                ],
            },
            {
                title: 'Easy 2 order',
                role: 'Software Engineer',
                details: [
                    'Worked in the domain of online food order management system Easy 2 order. Easy2 Order is an online web based tool that setup your own website and give your customers the opportunity to visit your store and place their orders through the internet. Like Pizza hut and Dominos that already receive their orders online.',
                ],
            },
        ],
    },
    // Add more experiences as needed
];


const CustomAvatar = withStyles({
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        backgroundColor: 'transparent',
    },
})(MuiAvatar);

const initialsOfDuration = (duration:string) => {
    const joiningYear = duration.split('-');
    return joiningYear[0];
}
export default function ExperienceTimeline() {
    const classes = useStyles();


    return (
        <Timeline className={classes.timelineLine} align="left">
            {experiences.map((experience, index) => (
                <TimelineItem key={index} className={classes.timelineItem}>
                    <TimelineSeparator>
                        {/* Company logo inside TimelineDot */}
                        <Typography variant="button" color="textSecondary">
                         {initialsOfDuration(experience.duration)}
                        </Typography>
                        {/* <TimelineDot className={classes.timelineDot} color='secondary'>
                       
                            <CustomAvatar

                                src={experience.companyLogo}
                                alt={`${experience.companyName} logo`}
                                className={`${classes.companyLogo} ${classes.avatarInitial}`}
                            />
                        </TimelineDot> */}
                        {index < experiences.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContentWrapper}>
                        <Paper elevation={3} className={classes.paper}>
                            {/* Display the client logo in the top right corner */}
                            {experience.clientLogo && (
                                <div style={
                                   { 
                                    display: 'grid',
                                    position: 'absolute',
                                    right: '10px',
                                    justifyItems: 'center',
                                    gap: '5px',
                                    top: '0'
                                   }
                                }>
                                <img
                                  src={experience.clientLogo}
                                  alt={`${experience.companyName} client logo`}
                                  className={classes.clientLogo}
                                />
                                <Typography variant="caption" color="textSecondary">
                                {experience.clientName}
                                </Typography>
                              </div>
                            )}
                            
                            {/* Display the duration on top of the company's info */}
                            {/* <Typography variant="body2" color="textSecondary">
                                {experience.duration}
                            </Typography> */}
                            

                            {/* Company Logo and Name Inline */}
                            <div className={classes.companyNameContainer}>
                                {experience.companyLogo && (
                                    <img
                                        src={experience.companyLogo}
                                        alt={`${experience.companyName} logo`}
                                        className={classes.companyLogo_1}
                                    />
                                )}
                               {/*  <Typography variant="h6" component="h1" className={classes.companyName}>
                                    {experience.companyName}
                                </Typography> */}
                            </div>

                          
                           {/*  <Typography variant="h6" component="h1" className={classes.companyName}>
                                {experience.companyName}
                            </Typography> */}



                            <Typography variant="subtitle1" className={classes.entitle}>
                                {experience.entitle} - {experience.location}

                            </Typography>

                            

                            {experience.projects.map((project, projectIndex) => (
                                <div key={projectIndex} style={{ marginTop: '8px' }}>
                                    <Typography variant="subtitle1" >
                                        {project.title} - {project.role}
                                    </Typography>
                                    <ul>
                                        {project.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>
                                                <Typography variant="body2">{detail}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
