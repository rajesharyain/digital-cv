// src/App.tsx
import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  container: {
      marginTop: '80px',
      paddingTop: '20px',
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
  const candidateProfile = {
    name: 'Rajesh Kumar',
    avatarUrl: 'https://via.placeholder.com/150',
    githubAvatarUrl: 'https://github.com/rajesharyain.png', // Replace with actual GitHub avatar URL
    githubUrl: 'https://github.com/rajesharyain',
    linkedinUrl: 'https://linkedin.com/in/rajesharyain',
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
    contributionGraphUrl: 'https://github.com/rajesharyain.png', // Replace with your actual GitHub username
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

  return (
    <Router>

      <CssBaseline />
      <Menu />

      <Container style={{ marginTop: '20px' }} >
        <Grid container spacing={2} >
          <Grid item xs={12} md={3}>
           <ProfileLeftGrid {...candidateProfile}/>
          </Grid>
 
          <Grid item xs={12} md={6}>
            <Routes >
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<ProfilePage />} />
              <Route path="/experience" element={<WorkExpereincePage />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/github-metrics" element={<GitHubMetrics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
          
          <Grid item xs={12} md={3}>
            {/* Third column content goes here */}
           <ProjectDetails videoUrl='https://www.youtube.com/embed/FXDr1-04f7I'/>
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


