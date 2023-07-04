import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import Collapse from '@mui/material/Collapse'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import CssBaseline from '@mui/material/CssBaseline'
import Groups3Icon from '@mui/icons-material/Groups3'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TimelineIcon from '@mui/icons-material/Timeline'
import ListItemButton from '@mui/material/ListItemButton'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { styled, useTheme } from '@mui/material/styles'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

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

  const [drawerItems, setDrawerItems] = React.useState({
    items: [
      { name: 'Home', icon: <HomeIcon />, divider: false, open: false},
      { name: 'Teams', icon: <Groups3Icon />, divider: false, open: false},
      { name: 'Talent', icon: <AutoAwesomeIcon />, divider: false, open: false, items: [
        {name: 'Diversity'},
        {name: 'Competency Matrix'},
        {name: 'Talent Hunt'},
      ]},
      { name: 'Engagement', icon: <Diversity2Icon />, divider: false, open: false, items: [
        {name: 'Culture'},
        {name: 'OKRs'},
        {name: 'Motivators'},
      ]},
      { name: 'Develop', icon: <TimelineIcon />, divider: false, open: false, items: [
        {name: 'Careers Plan'},
        {name: 'Experiments'},
      ]},
      { name: 'Perform', icon: <AssessmentIcon />, divider: false, open: false, items: [
        {name: 'Feedback'},
        {name: 'Action Plans'},
        {name: 'KPIs'},
      ]},
      { name: 'Reward', icon: <EmojiEventsIcon />, divider: true, open: false, items: [
        {name: 'Merit'},
        {name: 'Salary'},
        {name: 'Recognition'},
      ]},
      { name: 'Case studies', icon: <LibraryBooksIcon />, divider: false, open: false},
      { name: 'About me', icon: <LibraryBooksIcon />, divider: false, open: false},
    ],
  });

  const toggleItemOpen = (itemIndex) => {
    const updatedDrawerItems = { ...drawerItems };
    updatedDrawerItems.items[itemIndex].open = !updatedDrawerItems.items[itemIndex].open;
    setDrawerItems(updatedDrawerItems);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
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
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open &&
            <IconButton onClick={handleDrawer}>
              {theme.direction === 'rtl' ? '' : <ChevronLeftIcon />}
            </IconButton>
          }
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                {item.items != undefined ? (
                  <>
                    <ListItemButton
                      onClick={() => toggleItemOpen(index)}
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
                      {item.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {item.open && (
                      <Collapse in={item.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.items.map((subitem, subindex) => (
                            <React.Fragment key={subindex}>
                              <ListItemButton
                                sx={{ pl: 4 }}
                                href={`/${item.name.split(' ').join('-')}/${subitem.name.split(' ').join('-')}`}>
                                <ListItemText primary={subitem.name} />
                              </ListItemButton>
                            </React.Fragment>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </>
                ) : (
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
                )}
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