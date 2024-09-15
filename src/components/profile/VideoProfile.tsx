// src/components/VideoProfile.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface VideoProfileProps {
    videoUrl?: string;
}

/* const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
})); */

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      margin: 'auto',
    },
    iframeContainer: {
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      background: '#000',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  }));

const VideoProfile: React.FC<VideoProfileProps> = ({ videoUrl }) => {
    const classes = useStyles();

    if (!videoUrl) {
        return null;
    }


    return (
        /*  <Card className={classes.root}>
             <CardContent>
                 <Typography variant="h6">Digital Video Profile</Typography>
                 <CardMedia
                     className={classes.media}
                     title="Digital Video Profile"
                     component="iframe"
                     src="https://www.youtube.com/embed/FXDr1-04f7I"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     frameBorder="0"
                     allowFullScreen
                 />
             </CardContent>
         </Card> */

        <div className={classes.root}>
                <div className={classes.iframeContainer}>
                    <iframe
                        className={classes.iframe}
                        src="https://www.youtube.com/embed/FXDr1-04f7I"
                        title="Digital Video Profile"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
        </div>
    );
};

export default VideoProfile;
