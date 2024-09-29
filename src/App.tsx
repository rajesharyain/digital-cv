// src/App.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Container, CssBaseline, Typography, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/services/Menu';
import { Home } from '@material-ui/icons';
import Contact from './pages/Contact';
import ProfilePage from './pages/Profile';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import GitHubMetrics from './pages/GitHubMetrics';
import ProjectDetails from './components/projects/ProjectDetails';
import ProfileLeftGrid from './components/profile/ProfileLeftGrid';
import WorkExpereincePage from './pages/WorkExpereincePage';
import { ProfileProps } from './components/profile/profileProps';
import { API_PATH } from './api/apiConstants';
import { apiGet } from './api/apiService';

const useStyles = makeStyles((theme) => ({
  container: {
     /*  marginTop: '100px',
      paddingTop: '20px', */
  },
  header: {
      fontFamily: 'Lobster, cursive',
      marginBottom: theme.spacing(4),
  },
  body: {
      fontFamily: 'Roboto, sans-serif',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const mainContentRef = useRef<HTMLDivElement | null>(null); // Create a ref for the middle section

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
  

  return (
    
    <Router>

      <CssBaseline />
      <Menu mainContentRef={mainContentRef} />

      <Container >
        <Grid container spacing={2} >
          <Grid item xs={12} md={3}>
          
           {candidateProfile && <ProfileLeftGrid {...candidateProfile}/>}
          </Grid>
 
          <Grid item xs={12} md={6} ref={mainContentRef}>
            <Routes >
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={candidateProfile && <ProfilePage data={candidateProfile}/>} />
              <Route path="/experience" element={<WorkExpereincePage />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/github-metrics" element={<GitHubMetrics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
          
          <Grid item xs={12} md={3}>
            {/* Third column content goes here */}
           <ProjectDetails {...candidateProfile} />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );

  {/* <Container>
            <CssBaseline />
            <Menu />
            <Typography variant="h2" align="center" gutterBottom>
                Candidate Digital Profile
            </Typography>
            <Profile {...candidateProfile} />
        </Container> */}
};

export default App;


