import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer,AppBar, Toolbar, CssBaseline, List, Typography, Divider, IconButton, ListItem, ListItemIcon, 
  ListItemText, Hidden, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TodayIcon from '@material-ui/icons/Today';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  botones: {
    margin: theme.spacing(1),
    color: "#c5a011"
  },

  
  root: {
    display: 'flex',
    background: "#ffe2c3",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },

}));

 function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
    <Hidden mdUp> 
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img src="favicon.ico" alt="logo" width="50px"/>
          <Typography variant="h6" noWrap color="secondary" className={classes.title}>
            BROWS
          </Typography>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

    
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        
              <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                <ListItem button className={classes.botones}>
                      <ListItemIcon>
                        <HomeIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText primary="Inicio"/>
                        
                    </ListItem>
                    <ListItem button className={classes.botones}>
                      <ListItemIcon>
                        <RoomIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText primary="Ubicacion"/>
                    </ListItem>
                    <ListItem button className={classes.botones}>
                      <ListItemIcon>
                        <MailIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText primary="Contacto"/>
                    </ListItem>
                    <ListItem button className={classes.botones}>
                      <ListItemIcon>
                        <ShoppingCartIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText primary="Servicios"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button className={classes.botones}>
                      <ListItemIcon>
                        <TodayIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText primary="Agendate"/>
                    </ListItem>
                  
                </List>
              </Drawer>
            
          </div>
          </Hidden>  
           <Hidden smDown> 
           <div className={classes.root}>
             <CssBaseline />
             <AppBar
               position="fixed"
               className={clsx(classes.appBar, {
                 [classes.appBarShift]: open,
               })}
             >
               <Toolbar>
               <img src="favicon.ico" alt="logo" width="50px"/>
                 <Typography color="secondary" variant="h6" noWrap className={classes.title}>
                    BROWS
                 </Typography>
                 <Button color="secondary" className={classes.botones} >Inicio</Button>
                 <Button color="secondary" className={classes.botones} >Contacto</Button>
                 <Button color="secondary" className={classes.botones} >Ubicacion</Button>
                 <Button color="secondary" className={classes.botones} >Servicios</Button>
                 <Button color="secondary" className={classes.botones} >Agendate</Button>
               </Toolbar>
             </AppBar>
                   
                 </div>
                 </Hidden>
                 </Fragment>
        );
      }
    

export default NavBar