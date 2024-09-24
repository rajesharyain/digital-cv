// src/pages/Profile.tsx
import React, { useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import VictoryChartPage from './VictoryChartPage';
import HighlightedSkillsSection from './HighlightedSkillsSection';
import { Button, Card, CardContent } from '@material-ui/core';
import { printToPDF } from '../components/services/PdfService';
import { ProfileProps } from '../components/profile/profileProps';
import { apiGet } from '../api/apiService';
import { API_PATH } from '../api/apiConstants';

const ProfilePage: React.FC = () => {
    const [candidateProfile, setCandidateProfile] = useState<ProfileProps | undefined>();

    useEffect(() => {
        const fetchCandidateProfile = async () => {
            try {
                const response = await apiGet<ProfileProps>(API_PATH.get.profileUrl);
                setCandidateProfile(response);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchCandidateProfile();
    }, [])

    const handlePrint = () => {
        printToPDF('achievements-container', 'RajeshKumarCV.pdf');
    };

    return (
        <div id="achievements-container">
           {candidateProfile && <Profile {...candidateProfile} />}


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
