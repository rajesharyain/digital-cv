// src/components/ProjectDetails.tsx
import React from 'react';
import { Typography, List, ListItem, ListItemText, Card, CardContent, Divider, makeStyles, Chip } from '@material-ui/core';
import VideoProfile from '../profile/VideoProfile';
import Organizations from '../profile/Organizations';
import { Education } from '../profile/profileProps';

interface ProjectDetailsProps {

    videoUrl?: string;
    education?: Education[];
    industryDomains?: string[]

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
    },
   
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 'auto',
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 'large',
    },
    section: {
        marginBottom: theme.spacing(2),
    },
    listStyle: {
        listStyle: 'circle',
        margin: theme.spacing(0),
    },
    educationText: {
        fontWeight: 600
    },
}));


const ProjectDetails: React.FC<ProjectDetailsProps> = ({ videoUrl, education, industryDomains }) => {
    const classes = useStyles();

    console.log("industryDomain", industryDomains)
    return (
        <div>
            {
                videoUrl && <Card className={classes.section} elevation={0}>
                    <CardContent>
                        <Typography variant="caption" component="h1">Hi, I'm Rajesh. Let me introduce myself...</Typography>
                        <VideoProfile videoUrl={videoUrl} />
                    </CardContent>
                </Card>
            }
            {
                industryDomains && <Card className={classes.section} elevation={0}>
                    <CardContent>
                        <Typography variant="subtitle2" component="h1">Industry Domains</Typography>
                        <ul className={classes.listStyle}>
                            {industryDomains?.map((industry, index) =>
                                <li key={index}>{industry}</li>
                            )}
                        </ul>
                    </CardContent>
                </Card>
            }

            {
                education &&

                <Card className={classes.section} elevation={0}>
                    <CardContent>
                        <Typography variant="subtitle2" component="h1">Education</Typography>
                        <div>
                            <ul className={classes.listStyle}>

                                {education?.map((edu, index) =>
                                    <li key={index}>

                                        <Typography variant="caption" component="h1" className={classes.educationText}>
                                            {edu.title}
                                        </Typography>
                                        <Typography variant="caption" component="h1">{edu.institute}, {edu.address}</Typography>
                                        <Typography variant="caption" component="h1">{edu.passout}</Typography>
                                    </li>
                                )}


                            </ul>
                        </div>
                    </CardContent>
                </Card>
            }




            {/* 
            <Card className={classes.section}>
                <CardContent>
                    <Typography variant="h6">GitHub Contributions</Typography>
                    <Typography variant="body2">
                        Display GitHub contributions or metrics here.
                    </Typography>

                    <Typography variant="h6">Latest Project Contributions</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Contributions to Project X" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Contributions to Project Y" />
                        </ListItem>
                    </List>
                </CardContent>
            </Card> */}
        </div>
    );
};

export default ProjectDetails;
