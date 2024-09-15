// src/components/Profile.tsx
import React from 'react';
import { Card, CardContent, Typography, Link, Grid, Avatar, Divider } from '@material-ui/core';
import { GitHub, LinkedIn, Email, Phone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Achievements from './Achievements';
import VideoProfile from './VideoProfile';
import GitHubMetrics from '../github/GitHubMetrics';
import HireMeButton from '../services/HireMeButton';
import ReactChart from '../ReactChart';
import Chart from '../Chart';
import Skills from '../../pages/Skills';
import HighlightedSkillsSection from '../../pages/HighlightedSkillsSection';
import VictoryChartPage from '../../pages/VictoryChartPage';
import Organizations from './Organizations';
import CurrentActivity from '../../pages/CurrentActivity';

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

                    
/* const organizations = [
    { name: 'Aubay|CTW.', period: '01/2024 - Present' , current:true, logo:''},
    { name: 'Citicorp Services Private Ltd.', period: '10/2019 - 01/2024' , current:false, logo:'' },
    { name: 'Mphasis', period: '10/2018 - 10/2019' , current:false , logo:''},
    { name: 'Accenture', period: '01/2014 - 10/2018'  , current:false, logo:''},
    { name: 'Entrata (Xento System)', period: '07/2012 - 01/2014' , current:false , logo:''},
    { name: 'Smartdata Enterprises, India', period: '06/2011 - 07/2012' , current:false , logo:''},
]; */

const organizations = [
    { name: 'Aubay|CTW.', period: '01/2024 - Present', current: true, logo: 'company/aubay_logo.svg', link: 'https://www.aubay.com/' },
    { name: 'Citicorp Services Private Ltd.', period: '10/2019 - 01/2024', current: false, logo: 'company/citi_logo.svg', link: 'https://www.citi.com/' },
    { name: 'Mphasis', period: '10/2018 - 10/2019', current: false, logo: 'company/mphasis_logo.svg', link: 'https://www.mphasis.com/' },
    { name: 'Accenture', period: '01/2014 - 10/2018', current: false, logo: 'company/accenture_logo.svg', link: 'https://www.accenture.com/' },
    { name: 'Entrata (Xento System)', period: '07/2012 - 01/2014', current: false, logo: 'company/entrata_logo.svg', link: 'https://www.entrata.com/' },
    { name: 'Smartdata Enterprises, India', period: '06/2011 - 07/2012', current: false, logo: 'company/smartdata_logo.svg', link: 'https://www.smartdatainc.com/' },
  ];
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
    currentActivityBackground:{
        marginTop: theme.spacing(2),
        background:theme.palette.grey[100],
        padding:10,
    },
    sectionTitle:{
        textTransform:'uppercase',
        fontWeight:600,
    }
}));

const Profile: React.FC<ProfileProps> = ({ name, avatarUrl, githubAvatarUrl, githubUrl, linkedinUrl, email, phone, videoUrl, skills, summary, achievements, metrics, contributionGraphUrl }) => {
    const classes = useStyles();
    const profileAvatarUrl = githubAvatarUrl || avatarUrl || 'https://via.placeholder.com/150';
    const userName = 'rajesharyain';
    return (
        <Card className={classes.root}>
            {/* <div className={classes.leftColumn}>
                <Avatar src={profileAvatarUrl} alt={name} className={classes.avatar} />
                <Typography variant="h5" gutterBottom>{name}</Typography>
                <div>
                    <Link href={githubUrl} target="_blank" rel="noopener">
                        <GitHub className={classes.icon} />
                    </Link>
                    <Link href={linkedinUrl} target="_blank" rel="noopener">
                        <LinkedIn className={classes.icon} />
                    </Link>
                </div>
                <HireMeButton />
                <div className={classes.section}>
                    <Typography variant="h6">Contact Information</Typography>
                    <Typography variant="body2"><Email /> {email}</Typography>
                    <Typography variant="body2"><Phone /> {phone}</Typography>
                </div>
                <VideoProfile videoUrl={videoUrl} />
            </div> */}
            {/* <Divider orientation="vertical" flexItem /> */}
            <div /* className={classes.rightColumn} */>
                <CardContent>
                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>Summary</Typography>
                        <Typography variant="body1" display='block' >{summary}</Typography>
                    </div>

                   {/*  <Divider orientation="horizontal"/> */}
                   <div className={classes.section}>
                    <Typography variant="button" className={classes.sectionTitle}>Current Organazation</Typography>
                        <div className={classes.currentActivityBackground}>
                            <CurrentActivity/>
                        </div>
                    </div>
                   
                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>Skills</Typography>
                        <Typography variant='body2' >Currently focused on the highlighted skills.</Typography>
                        <HighlightedSkillsSection />
                    </div>

                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>Github Activity</Typography>
                        <div className={classes.currentActivityBackground}>
                            <ReactChart userName={userName} />
                        </div>
                    </div>

                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>Organizations, I Worked With</Typography>
                    <Organizations
                            organizations={organizations}
                        />
                    </div>
                    
                    {/*  <Chart userName={userName} /> */}
                    
                   

                  {/*   <GitHubMetrics metrics={metrics} contributionGraphUrl={contributionGraphUrl} /> */}
                   {/*  <Achievements achievements={achievements} /> */}
                </CardContent>
            </div>
        </Card>
    );
};

export default Profile;
