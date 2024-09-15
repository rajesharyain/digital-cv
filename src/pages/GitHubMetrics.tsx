// src/pages/GitHubMetricsPage.tsx
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import ReactChart from '../components/ReactChart';
import VictoryChartPage from './VictoryChartPage';

const GitHubMetrics: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [contributionGraphUrl, setContributionGraphUrl] = useState<string | null>(null);
    const username = 'rajesharyain';

     useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Replace with your GitHub username
                
                const response = await axios.get(`https://api.github.com/users/${username}/events`);
                const events = response.data;

                // Find the latest PushEvent to get the contribution graph URL
                const pushEvent = events.find((event: any) => event.type === 'PushEvent');

                if (pushEvent) {
                    const { repo: { name } } = pushEvent.payload;
                    const graphUrl = `https://github.com/${name}/graphs/contributors`;

                    setContributionGraphUrl(graphUrl);
                } else {
                    setError('No contribution data found.');
                }
            } catch (error) {
                setError('Error fetching data from GitHub.');
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!contributionGraphUrl) {
        return <Typography variant="h6">No contribution data available.</Typography>;
    } 

    return (
        <div>
            <Typography variant="h4">GitHub Contribution Metrics</Typography>
            <Typography variant="body1">
                This graph shows your contributions on GitHub:
                <br />
               {/*  <a href={contributionGraphUrl} target="_blank" rel="noopener noreferrer">View GitHub Contribution Graph</a> */}
            </Typography>
            {/* <ReactChart userName={username} /> */}
            <VictoryChartPage userName={username} totalContributions={0} contributionDays={[]} />
        </div>
        
    );
};

export default GitHubMetrics;
