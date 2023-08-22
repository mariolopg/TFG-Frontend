import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useNavBar from './hooks/useNavBar';

import { PiDesktopTower } from "react-icons/pi"
import { LiaToolsSolid, LiaUserCircle } from "react-icons/lia"
import { BsShop } from "react-icons/bs"
import { BUILD_LIST_PATH, CONFIGURATOR_PATH, LOGIN_PATH, REGISTER_PATH, USER_PATH } from '../../constants';
import { useAppSelector } from '../../hooks/appHooks';
import { selectToken } from '../../redux/authSlice';

const NavBar: React.FC = () => {
  const { menuId, anchorEl, isMenuOpen, handleProfileMenuOpen, handleMenuClose, handleLogout } = useNavBar();

  function GetmenuItems() {
    const token = useAppSelector(selectToken)
    if (!!!token) {
      return (
        <>
          <MenuItem href={LOGIN_PATH}><a className='menu-item-link' href={LOGIN_PATH}>Iniciar sesión</a></MenuItem>
          <MenuItem href={LOGIN_PATH}><a className='menu-item-link' href={REGISTER_PATH}>Crear cuenta</a></MenuItem>
        </>
      )
    }
    return (
      <>
        <MenuItem href={LOGIN_PATH}><a className='menu-item-link' href={USER_PATH}>Perfil</a></MenuItem>
        <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
      </>
    )
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <GetmenuItems />
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            PC BUILDER
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton style={{ margin: "0 5px" }}
              edge="end"
              color="inherit"
              href={BUILD_LIST_PATH}
            >
              <PiDesktopTower />
            </IconButton>
            <IconButton style={{ margin: "0 5px" }}
              edge="end"
              color="inherit"
              href={CONFIGURATOR_PATH}
            >
              <LiaToolsSolid />
            </IconButton>
            {/* <IconButton style={{ margin: "0 5px" }}
              edge="end"
              color="inherit"
            >
              <BsShop />
            </IconButton> */}
            <IconButton style={{ margin: "0 5px" }}
              edge="end"
              size='large'
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LiaUserCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default React.memo(NavBar);