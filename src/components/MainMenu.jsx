import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'
import WorkIcon from '@mui/icons-material/Work'
import Face3Icon from '@mui/icons-material/Face3'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Groups3Icon from '@mui/icons-material/Groups3'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import ListItemButton from '@mui/material/ListItemButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { styled, useTheme } from '@mui/material/styles'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MainMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }

  const drawerItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, divider: false },
    { name: 'People', icon: <Groups3Icon />, divider: false },
    { name: 'Projects', icon: <WorkIcon />, divider: false },
    { name: 'Statistics', icon: <AnalyticsIcon />, divider: false },
    { name: 'Activities', icon: <CalendarMonthIcon />, divider: false },
    { name: 'Case studies', icon: <LibraryBooksIcon />, divider: false },
    { name: 'About me', icon: <Face3Icon />, divider: false },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Karolym
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} paper={{ backgroundColor: 'primary.main'}}>
        <DrawerHeader>
          {open &&
            <IconButton onClick={handleDrawer}>
              {theme.direction === 'rtl' ? '' : <ChevronLeftIcon />}
            </IconButton>
          }
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  href={index == 0 ? '/' : `/${item.name.split(' ').join('-')}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              {item.divider && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default MainMenu