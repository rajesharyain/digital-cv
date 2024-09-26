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

interface CandiateProps {
    data: ProfileProps;
}

const ProfilePage: React.FC<CandiateProps> = ({data}) => {
    const handlePrint = () => {
        printToPDF('achievements-container', 'RajeshKumarCV.pdf');
    };

    return (
        <div id="achievements-container">
           {data && <Profile {...data} />}

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
