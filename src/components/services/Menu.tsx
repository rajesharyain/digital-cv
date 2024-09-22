// src/components/Menu.tsx
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, useMediaQuery, useTheme, ListItem, ListItemText, Drawer, IconButton, List, Slide, useScrollTrigger, CssBaseline } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link, useLocation , NavLink  } from 'react-router-dom';

const HEADER_HEIGHT = 56;

interface MenuProps {
  mainContentRef: React.RefObject<HTMLDivElement>;
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return ( 
    
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
      display: 'grid',
      rowGap:'10px',
      justifyItems:'baseline',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    listItem: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    drawerColor:{
       backgroundColor: theme.palette.primary.dark,
    },
    activeLink: {
      fontWeight: 'bold', // Highlight active item
    },
    listItemText: {
      color: 'inherit',
      textTransform: 'inherit'
    },
  

}));


const Menu: React.FC<MenuProps> = ({ mainContentRef }) => {
    const classes = useStyles();
    const theme = useTheme();
    const location = useLocation();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detects if the screen width is small (like mobile)
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      //console.log(`Drawer should ${open ? 'open' : 'close'}. Event type: ${event.type}`); // Debugging log
      if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
          return;
      }
      setDrawerOpen(open);
  };
  

  const handleNavClick = () => {
     if (mainContentRef.current) {
      
      const offsetPosition = mainContentRef.current.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      //mainContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    setDrawerOpen(false); // Close drawer after navigation
  };

      const menuItems = (
        <>
          <Button color="inherit">
            <NavLink to="/"  className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
              Profile
           </NavLink>
            {/* <NavLink to="/" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Profile</NavLink> */}
          </Button>
          <Button color="inherit">
            <NavLink to="/experience" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Experience</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/skills" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Skills</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/achievements" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Achievements</NavLink>
          </Button>
           {/* <Button color="inherit">
                    <NavLink to="/github-metrics" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>GitHub Metrics</NavLink>
                </Button> */}
          <Button color="inherit">
            <NavLink to="/contact" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Contact</NavLink>
          </Button>
        </>
      );
    
      const drawerMenuItems = (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         
            <Button color="inherit" className={classes.listItem}>
              <NavLink
               onClick={handleNavClick}
               to="/" className={({ isActive }) => `${classes.link} ${isActive ? classes.   activeLink : 'listItemText'}`}>
                Profile
              </NavLink>
            </Button>

            <Button color="inherit" className={classes.listItem}>
              <NavLink
                onClick={handleNavClick}
                to="/experience" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
                Experience
              </NavLink>
            </Button>
            <Button color="inherit" className={classes.listItem}>
              <NavLink
                onClick={handleNavClick}
                to="/skills" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
                Skills
              </NavLink>
            </Button>
            <Button color="inherit" className={classes.listItem}>
              <NavLink 
                onClick={handleNavClick}
                to="/achievements" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
                Achievements
              </NavLink>
            </Button>
            {/* <Button color="inherit" className={classes.listItem}>
              <NavLink to="/github-metrics" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
                Github Metrics
              </NavLink>
            </Button> */}
            <Button color="inherit" className={classes.listItem}>
              <NavLink 
                onClick={handleNavClick}
                to="/contact" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>
                Contact
              </NavLink>
            </Button>
        </div>
      );

    return (
    /*   <HideOnScroll> */
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Digital Profile
                </Typography>
              
                {/* <Button color="inherit">
                    <Link to="/" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Profile</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/experience" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Experience</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/skills" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Skills</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/achievements" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Achievements</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/github-metrics" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>GitHub Metrics</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/contact" className={({ isActive }) => `${classes.link} ${isActive ? classes.activeLink : ''}`}>Contact</Link>
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
        /* </HideOnScroll> */
    );
};

export default Menu;


