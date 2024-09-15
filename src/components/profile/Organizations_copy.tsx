import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Define the type for the props
interface OrganizationsProps {
  organizations: { name: string; period: string; current: boolean; logo: string; link: string }[];
}

// Styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
   /*  marginTop: theme.spacing(2), */
    marginBottom: theme.spacing(2),
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Ensure wrapping for responsiveness
    justifyContent: 'center', // Center items
    alignItems: 'center',
    gap: theme.spacing(3), // Space between items
   /*  marginTop: theme.spacing(2), */
    
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 120, // Width of each item
  },
  logoChip: {
    maxWidth: '150', // Size of the logo
    height: 'auto',
  /*   borderRadius: '50%', */ // Make it circular
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
   /*  border: `1px solid ${theme.palette.grey[300]}`, */ // Light border around logos
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)', // Zoom effect on hover
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Ensure the image fits well within the chip
  },
  current: {
    border: `3px solid ${theme.palette.primary.main}`, // Thicker border for the current organization
  },
  organizationName: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
  },
  period: {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
  },
}));

const Organizations: React.FC<OrganizationsProps> = ({ organizations }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.flexContainer}>
        {organizations.map((org, index) => (
          <div key={index} className={classes.flexItem}>
            <Link href={org.link} target="_blank" rel="noopener">
              <div className={`${classes.logoChip}`}>
                <img src={org.logo} alt={org.name} className={classes.logoImage} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
