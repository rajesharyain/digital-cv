// src/pages/Profile.tsx
import React from 'react';
import Profile from '../components/profile/Profile';
import VictoryChartPage from './VictoryChartPage';
import HighlightedSkillsSection from './HighlightedSkillsSection';
import { Button, Card, CardContent } from '@material-ui/core';
import { printToPDF } from '../components/services/PdfService';

const ProfilePage: React.FC = () => {
    const candidateProfile = {
        name: 'Rajesh Kumar',
        avatarUrl: 'https://via.placeholder.com/150',
        githubAvatarUrl: 'https://github.com/rajesharyain.png', // Replace with actual GitHub avatar URL
        githubUrl: 'https://github.com/rajesharyain',
        linkedinUrl: 'linkedin.com/in/rajesharyain',
        email: 'rkumar.arya@yahoo.com',
        phone: '+351-936522007',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'GraphQL'],
        summary: 'Experienced software developer with a strong background in developing scalable web applications and working with modern JavaScript frameworks. Proven ability to work independently and as part of a team to deliver high-quality software solutions. Passionate about learning new technologies and continuously improving skills.',
        metrics: [
            {
                title: 'Total Contributions',
                value: '1234',
                imageUrl: 'https://via.placeholder.com/50'
            },
            {
                title: 'Repositories',
                value: '42',
                imageUrl: 'https://via.placeholder.com/50'
            },
            {
                title: 'Followers',
                value: '256',
                imageUrl: 'https://via.placeholder.com/50'
            }
        ],
        contributionGraphUrl: 'https://github.com/username.png', // Replace with your actual GitHub username
        achievements: [
            {
                title: 'Certified Kubernetes Administrator',
                imageUrl: 'https://via.placeholder.com/50',
                description: 'Completed certification from CNCF in 2021.'
            },
            {
                title: 'AWS Certified Solutions Architect',
                imageUrl: 'https://via.placeholder.com/50',
                description: 'Achieved in 2020, demonstrating expertise in cloud architecture.'
            },
            {
                title: 'GitHub Star',
                imageUrl: 'https://via.placeholder.com/50',
                description: 'Recognized for significant contributions to open-source projects in 2019.'
            }
        ],
    };

    const handlePrint = () => {
        printToPDF('achievements-container', 'RajeshKumarCV.pdf');
    };

    return (
        <div id="achievements-container">
            <Profile {...candidateProfile} />
          
           {/*  <VictoryChartPage userName="rajesharyain" totalContributions={0} contributionDays={[]} /> */}
           {/*  <Button
                variant="contained"
                color="primary"
                onClick={handlePrint}
                style={{ marginTop: 20 }}
            >
                Download PDF
            </Button> */}
        </div>
    );
};

export default ProfilePage;
