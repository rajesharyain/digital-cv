import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Typography, Avatar as MuiAvatar, withStyles, Card, CardContent, useTheme, useMediaQuery, Divider } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { relative } from 'path';
import { apiGet } from '../api/apiService';
import { API_PATH } from '../api/apiConstants';
import { Experience } from '../components/profile/experienceProps';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';


const useStyles = makeStyles((theme) => ({
    img: {
        objectFit: 'contain',
    },
    paper: {
        padding: '16px 0px',
        /*  marginBottom: theme.spacing(2), */
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
        position: 'relative',
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
    bold: {
        fontWeight: 'bold',
    },
    timeLineConnector: {
        width: 1,
        background: theme.palette.grey[400],
    },
    projectTitle: {
        color: theme.palette.text.primary,
        fontWeight: 600
    },
    projectSkills:{
       
    },
    detailList:{
       /*  marginTop:'10px', */
        marginLeft: '-20px',
    },
    detailListItem: {
        lineHeight:'2.2rem'
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

const initialsOfDuration = (duration: string) => {
    const joiningYear = duration.split('-');
    return joiningYear[0];
}
export default function ExperienceTimeline() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detects if the screen width is small (like mobile)
    const [experiences, setExperienceData] = useState<Experience[]>([]);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await apiGet<Experience[]>(API_PATH.get.experienceUrl);
                setExperienceData(response);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchExperience();
    }, [])

    return (
        <Card elevation={0}>
            <CardContent>
                <Timeline className={classes.timelineLine} align="left">
                    {experiences.map((experience, index) => (
                        <TimelineItem key={index} className={classes.timelineItem}>
                            <TimelineSeparator>
                                {/* Company logo inside TimelineDot */}
                                <Typography variant="overline" className={classes.bold} color="textSecondary">
                                    {initialsOfDuration(experience.duration)}
                                </Typography>
                                {/* <TimelineDot className={classes.timelineDot} color='secondary'>
                       
                            <CustomAvatar

                                src={experience.companyLogo}
                                alt={`${experience.companyName} logo`}
                                className={`${classes.companyLogo} ${classes.avatarInitial}`}
                            />
                        </TimelineDot> */}
                                {index < experiences.length - 1 && <TimelineConnector className={classes.timeLineConnector} />}
                            </TimelineSeparator>
                            <TimelineContent className={classes.timelineContentWrapper}>
                                <Paper elevation={0} className={classes.paper}>
                                    {/* Display the client logo in the top right corner */}
                                    {!isMobile && experience.clientLogo && (
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

                                    <Divider/>

                                    {experience.projects.map((project, projectIndex) => (
                                    
                                        <div key={projectIndex} style={{ marginTop: '8px' }}>
                                            <Typography variant="subtitle1" className={classes.projectTitle} >
                                                <span >Project</span>: {project.title}
                                            </Typography>
                                            <Typography variant='caption' className={classes.projectSkills} >
                                                {project.projectSkills}
                                            </Typography>
                                          <div className={classes.detailList}>
                                           
                                            <ul>
                                                {project.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className={classes.detailListItem}>
                                                        <Typography variant="body2">{detail}</Typography>
                                                    </li>
                                                ))}
                                            </ul>
                                            </div> 
                                        </div>
                                    ))}
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </CardContent>
        </Card>
    );
}
