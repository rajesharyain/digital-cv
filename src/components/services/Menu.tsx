// src/components/Menu.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, useMediaQuery, useTheme, ListItem, ListItemText, Drawer, IconButton, List } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    list: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
     
    },
    listItem: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    drawerColor:{
       backgroundColor: theme.palette.primary.dark,
    }

}));

const Menu: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detects if the screen width is small (like mobile)
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      //console.log(`Drawer should ${open ? 'open' : 'close'}. Event type: ${event.type}`); // Debugging log
      if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
          return;
      }
      setDrawerOpen(open);
  };
  

      const menuItems = (
        <>
          <Button color="inherit">
            <Link to="/" className={classes.link}>Profile</Link>
          </Button>
          <Button color="inherit">
            <Link to="/experience" className={classes.link}>Experience</Link>
          </Button>
          <Button color="inherit">
            <Link to="/skills" className={classes.link}>Skills</Link>
          </Button>
          <Button color="inherit">
            <Link to="/achievements" className={classes.link}>Achievements</Link>
          </Button>
           {/* <Button color="inherit">
                    <Link to="/github-metrics" className={classes.link}>GitHub Metrics</Link>
                </Button> */}
          <Button color="inherit">
            <Link to="/contact" className={classes.link}>Contact</Link>
          </Button>
        </>
      );
    
      const drawerMenuItems = (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         
         
          <List>
            <ListItem button className={classes.listItem}>
              <Link to="/" className={classes.link}>
              <ListItemText primary="Profile" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/experience" className={classes.link}>
                <ListItemText primary="Experience" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/skills" className={classes.link}>
                <ListItemText primary="Skills" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/achievements" className={classes.link}>
                <ListItemText primary="Achievements" />
              </Link>
            </ListItem>
            {/* <ListItem button>
              <Link to="/github-metrics" className={classes.link}>
                <ListItemText primary="Github Metrics" />
              </Link>
            </ListItem> */}
            <ListItem button>
              <Link to="/contact" className={classes.link}>
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>
          </List>
        </div>
      );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Digital Profile
                </Typography>
              
                {/* <Button color="inherit">
                    <Link to="/" className={classes.link}>Profile</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/experience" className={classes.link}>Experience</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/skills" className={classes.link}>Skills</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/achievements" className={classes.link}>Achievements</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/github-metrics" className={classes.link}>GitHub Metrics</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/contact" className={classes.link}>Contact</Link>
                </Button> */}

{isMobile ? (
            <>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer 
              classes={{ paper: classes.drawerColor }}
              anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerMenuItems}
              
              </Drawer>
            </>
          ) : (
            menuItems
          )}
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
