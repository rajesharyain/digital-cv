// src/components/GitHubMetrics.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../Chart';

interface GitHubMetricsProps {
    metrics: { title: string; value: string; imageUrl: string }[];
    contributionGraphUrl: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    metric: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    avatar: {
        marginRight: theme.spacing(2),
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    content: {
        flex: 1,
    },
    graph: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
}));

const GitHubMetrics: React.FC<GitHubMetricsProps> = ({ metrics, contributionGraphUrl }) => {
    const classes = useStyles();
    const userName = 'rajesharyain';
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">GitHub Metrics</Typography>
                {metrics.map((metric, index) => (
                    <div key={index} className={classes.metric}>
                        <Avatar src={metric.imageUrl} className={classes.avatar} />
                        <div className={classes.content}>
                            <Typography variant="subtitle1">{metric.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {metric.value}
                            </Typography>
                        </div>
                    </div>
                ))}
                <div className={classes.graph}>
                    <Typography variant="h6">Contribution Graph</Typography>
                    {/* <img src={contributionGraphUrl} alt="GitHub Contribution Graph" /> */}
                   {/*  <Chart userName={userName} /> */}
                </div>
                {/* <Chart userName={userName} /> */}
            </CardContent>
        </Card>
    );
};

export default GitHubMetrics;
