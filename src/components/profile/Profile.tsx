import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Divider, Button } from '@material-ui/core';
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
import { Link } from 'react-router-dom';
import { ProfileProps } from './profileProps';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',  // Distribute items to opposite ends
        alignItems: 'center',             // Align vertically in the middle
        marginBottom: theme.spacing(2),   // Add some spacing below the section
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
    currentActivityBackground: {
        marginTop: theme.spacing(1),
        background: '#fafafa',
        padding: 15,
    },
    sectionTitle: {
        textTransform: 'uppercase',
        fontWeight: 600,
    }
}));

const Profile: React.FC<ProfileProps> = ({ summary, githubUserName, organizations, currentExperience, skills }) => {
    const classes = useStyles();

    const SUMMARY_LABEL = "Summary";
    const ORGANIZATION_LABEL = "Current Organazation";
    const SKILLS_LABEL = "Skills";
    const HIGHLIGHTED_SKILLS_LABEL = "Currently focused on the highlighted skills";
    const GITHUB_ACTIVITY_LABEL = "Github Activity";
    const COMPANIES_LABEL = "Organizations, I Worked With";
    const VIEW_BUTTON_LABEL = "View All";

    return (
        <Card className={classes.root} elevation={0}>
            <div>
                <CardContent>
                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>{SUMMARY_LABEL}</Typography>
                        <Typography variant="body1" display='block' >{summary}</Typography>
                    </div>

                    <div className={classes.section}>
                        <div className={classes.container}>
                            <Typography variant="button" className={classes.sectionTitle}>{ORGANIZATION_LABEL}</Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to="/experience"
                                size="small"
                            >
                                {VIEW_BUTTON_LABEL}
                            </Button>
                        </div>
                        <div className={classes.currentActivityBackground}>
                            <CurrentActivity {...currentExperience}/>
                        </div>
                    </div>

                    <div className={classes.section}>
                        <div className={classes.container}>
                            <Typography variant="button" className={classes.sectionTitle}>{SKILLS_LABEL}</Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to="/skills"
                                size="small"
                            >
                                {VIEW_BUTTON_LABEL}
                            </Button>
                        </div>
                        <Typography variant='body2' >{HIGHLIGHTED_SKILLS_LABEL}</Typography>
                        <HighlightedSkillsSection skills = {skills}/>
                    </div>

                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>{GITHUB_ACTIVITY_LABEL}</Typography>
                        <div className={classes.currentActivityBackground}>
                            <ReactChart userName={githubUserName} />
                        </div>
                    </div>

                    <div className={classes.section}>
                        <Typography variant="button" className={classes.sectionTitle}>{COMPANIES_LABEL}</Typography>
                        <Organizations organizations = {organizations} />
                    </div>
                    
                    {/* <Chart userName={githubUserName} /> */}
                    {/*   <GitHubMetrics metrics={metrics} contributionGraphUrl={contributionGraphUrl} /> */}
                    {/*  <Achievements achievements={achievements} /> */}
                </CardContent>
            </div>
        </Card>
    );
};

export default Profile;
