import { useState, useEffect } from 'react';
import { getLinks } from "../assets/data"
import { useTranslation } from 'react-i18next';
import aboutAvatar from "../assets/picture.png";
import DeleteIcon from '@mui/icons-material/Delete';

import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Avatar, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, ButtonGroup, Tooltip, MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import BrIcon from "../assets/br.png";
import UsIcon from "../assets/us.png";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

type Anchor = 'left' | 'right';


const ResponsiveAppBar = (props: any) => {
  const { t, i18n } = useTranslation();
  let menuLinks = getLinks();
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [state, setState] = useState({ left: false, right: false });



  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} alt="Eduardo Nakamura" src={aboutAvatar} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eduardo Nakamura
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
            >
              <Box role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
                <List>
                  {menuLinks.map((page, index) => (
                    <ListItem key={'btn-' + index} button component={Link} to={page.location}>
                      <ListItemButton>
                        <page.icon sx={{ mr: 1 }} />
                        <ListItemText primary={t(page.name)} />
                      </ListItemButton>
                    </ListItem>
                  ))}

                </List>
              </Box>
            </Drawer>
          </Box>

          <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} alt="Eduardo Nakamura" src={aboutAvatar} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eduardo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((page, index) => (
              <Link className="btn-header" key={'btn-' + index} to={page.location}>{t(page.name)}</Link>
            ))}


          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={toggleDrawer('right', true)} sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              <Box role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
                <List>
                  <ListItem>
                    <ListItemButton onClick={() => props.setTheme(!props.themeSelect)}>
                      {props.themeSelect ? <Brightness7Icon /> : <Brightness4Icon />}
                      <ListItemText primary={t(props.themeSelect ? 'toggleDark' : 'toggleLight')} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem >
                    <Box>
                      <Typography sx={{pb:1}}>{t("language")} </Typography>
                      <ButtonGroup>
                        <Button onClick={() => i18n.changeLanguage('br')} variant={i18n.resolvedLanguage === 'br' ? "contained" : "outlined"}>
                          <img style={{ width: '25px' }} src={BrIcon} alt="Português Brasileior" />
                        </Button>
                        <Button onClick={() => i18n.changeLanguage('en')} variant={i18n.resolvedLanguage === 'en' ? "contained" : "outlined"}>
                          <img style={{ width: '25px' }} src={UsIcon} alt="English" />
                        </Button>
                      </ButtonGroup>
                    </Box>

                  </ListItem>

                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
