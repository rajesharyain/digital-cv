// src/components/Achievements.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface AchievementsProps {
    achievements: { title: string; imageUrl: string; description: string }[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    achievement: {
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
}));

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">Achievements</Typography>
                {achievements.map((achievement, index) => (
                    <div key={index} className={classes.achievement}>
                        <Avatar src={achievement.imageUrl} className={classes.avatar} />
                        <div className={classes.content}>
                            <Typography variant="subtitle1">{achievement.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {achievement.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Achievements;
