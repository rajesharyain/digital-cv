// src/components/Profile.tsx
import React from 'react';
import { Card, CardContent, Typography, Link, Grid, Avatar, Divider, TableCell, TableRow, TableBody, Table, TableContainer, Paper, List, ListItemIcon, ListItem, ListItemText, CardActionArea, CardActions, Button } from '@material-ui/core';
import { GitHub, LinkedIn, Email, Phone, EmailOutlined, PhoneOutlined, LocationOnOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


interface ProfileProps {
    name: string;
    avatarUrl?: string;
    githubAvatarUrl?: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    phone: string;
    videoUrl?: string;
    skills: string[];
    summary: string;
    achievements: { title: string; imageUrl: string; description: string }[];
    metrics: { title: string; value: string; imageUrl: string }[];
    contributionGraphUrl: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        /*   display: 'flex',
          flexDirection: 'row',
          padding: 0, */
    },
    leftColumn: {
        flex: 1,
        textAlign: 'center',
    },
    rightColumn: {
        flex: 2,
    },
    avatar: {
       /*  width: theme.spacing(25),
        height: theme.spacing(25), */
        width: '80%',
        height: '80%',
        margin: 'auto',
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: 600,
        /*  fontSize: '1.5rem', */
        marginTop: theme.spacing(1),
    },
    secondaryTitle: {
        fontSize: '1.2rem',
        color: theme.palette.text.secondary,
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 'large',
    },
    section: {
        marginBottom: theme.spacing(2),
    },

    contact: {
        display: 'flex',
        margin: theme.spacing(1),
        alignItems: 'center',
        columnGap: '10px',
    },
    connect: {
        textAlign: 'left',
    },

}));

const ProfileLeftGrid: React.FC<ProfileProps> = ({ name, avatarUrl, githubAvatarUrl, githubUrl, linkedinUrl, email, phone, videoUrl, skills, summary, achievements, metrics, contributionGraphUrl }) => {
    const classes = useStyles();
    const profileAvatarUrl = githubAvatarUrl || avatarUrl || 'https://via.placeholder.com/150';

  
    return (
        <Card className={classes.root} elevation={0}>
            <CardContent >
                <div className={classes.leftColumn}>
                    {/*  <AvatarCard /> */}
                    <Avatar src={profileAvatarUrl} alt={name} className={classes.avatar} variant="circular"  />
                    <Typography variant="button" display="block" className={classes.name}>
                        {name}</Typography>
                    <Typography variant="overline" display="block" >
                        Application Developer</Typography>

                    <Divider orientation="horizontal" />
                    <Typography variant="caption" display="block" gutterBottom className={classes.contact}>
                        <LocationOnOutlined /> Lisbon, Portugal
                    </Typography>

                    <Typography gutterBottom variant="caption" display='block' className={classes.contact}>
                        <EmailOutlined />{email}
                    </Typography>
                    <Typography gutterBottom variant="caption" display='block' className={classes.contact}>
                        <PhoneOutlined /> {phone}
                    </Typography>

                    {/* <HireMeButton /> */}
                    <Divider orientation="horizontal" />
                    <Paper elevation={0}>
                        <CardActions>
                            <Button size="small" color="primary" href={githubUrl} target="_blank" rel="noopener">
                                GitHub <GitHub className={classes.icon} />
                            </Button>
                            <Button size="small" color="primary" href={linkedinUrl} target="_blank" rel="noopener">
                                LinkedIn <LinkedIn className={classes.icon} />
                            </Button>
                        </CardActions>
                    </Paper>

                    {/* <VideoProfile videoUrl={videoUrl} /> */}
                </div>
                <Divider orientation="horizontal" flexItem />
            </CardContent>
        </Card>
    );
};

export default ProfileLeftGrid;
