// src/components/ProjectDetails.tsx
import React from 'react';
import { Typography, List, ListItem, ListItemText, Card, CardContent, Divider, makeStyles, Chip } from '@material-ui/core';
import VideoProfile from '../profile/VideoProfile';
import Organizations from '../profile/Organizations';

interface ProjectDetailsProps {

    videoUrl?: string;

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
    },
    /* leftColumn: {
        flex: 1,
        marginRight: theme.spacing(2),
        textAlign: 'center',
    },
    rightColumn: {
        flex: 2,
    }, */
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
    listStyle:{
        listStyle:'circle',
        margin:theme.spacing(0),
    },
    educationText:{
        fontWeight: 600
    },
}));


const ProjectDetails: React.FC<ProjectDetailsProps> = ({ videoUrl }) => {
    const classes = useStyles();

    const organizations = [
        { name: 'Aubay|CTW.', period: '01/2024 - Present', current: true, logo: 'company/aubay_logo.svg', link: 'https://www.aubay.com/' },
        { name: 'Citicorp Services Private Ltd.', period: '10/2019 - 01/2024', current: false, logo: 'company/citi_logo.svg', link: 'https://www.citi.com/' },
        { name: 'Mphasis', period: '10/2018 - 10/2019', current: false, logo: 'company/mphasis_logo.svg', link: 'https://www.mphasis.com/' },
        { name: 'Accenture', period: '01/2014 - 10/2018', current: false, logo: 'company/accenture_logo.svg', link: 'https://www.accenture.com/' },
        { name: 'Entrata (Xento System)', period: '07/2012 - 01/2014', current: false, logo: 'company/entrata_logo.svg', link: 'https://www.entrata.com/' },
        { name: 'Smartdata Enterprises, India', period: '06/2011 - 07/2012', current: false, logo: 'company/smartdata_logo.svg', link: 'https://www.smartdatainc.com/' },
      ];

    return (
        <div>
            <Card className={classes.section} elevation={0}>
                <CardContent>
                    <Typography variant="caption" component="h1">Hi, I'm Rajesh. Let me introduce myself...</Typography>
                        <VideoProfile videoUrl={videoUrl} />
                  
                </CardContent>
            </Card>
          
            <Card className={classes.section} elevation={0}>
                <CardContent>
                <Typography variant="overline" component="h1">Industry Domains</Typography>
                    <ul className={classes.listStyle}>
                        <li>Automobile</li>
                        <li>Telcommunication</li>
                        <li>Real Estate</li>
                        <li>Financial</li>
                        <li>e-licensing</li>
                    </ul>
                   {/*  <Chip key={0} label={"Automobile"} variant='outlined' color='default' />
                    <Chip key={1} label={"Telcommunication"} variant='outlined' color='default' />
                    <Chip key={2} label={"Real Estate"} variant='outlined' color='default' />
                    <Chip key={3} label={"Financial"} variant='outlined' color='default' />
                    <Chip key={4} label={"E-licensing"} variant='outlined' color='default' /> */}
                </CardContent>
            </Card>


            <Card className={classes.section} elevation={0}>
                <CardContent>
                <Typography variant="overline" component="h1">Education</Typography>
                    <div>
                    <ul className={classes.listStyle}>
                      <li>
                      <Typography variant="caption" component="h1" className={classes.educationText}>
                        Master in Computer Application</Typography>
                        <Typography variant="caption" component="h1">KIIT College of engineering, Gurugram (M.D.U Rohtak)</Typography>
                        <Typography variant="caption" component="h1"> YR 2006 - 2009</Typography>
                       
</li>
                    </ul>
                       
                    </div>
                </CardContent>
            </Card>



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
