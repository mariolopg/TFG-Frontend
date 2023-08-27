import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LOGIN_PATH, REGISTER_PATH, USER_PROFILE_PATH } from '../../../../constants';
import useDropdownUser from './hooks/useDropdownUser';
import { LiaUserCircle } from 'react-icons/lia';

const DropdownMenu: React.FC = () => {

  const { isLogged, anchorEl, menuId, isMenuOpen, handleUserMenuOpen, handleMenuClose, handleLogout } = useDropdownUser()

  function GetmenuItems() {
    if (!isLogged) {
      return (
        <>
          <a className='menu-item-link' href={LOGIN_PATH}><MenuItem>Iniciar sesión</MenuItem></a>
          <a className='menu-item-link' href={REGISTER_PATH}><MenuItem>Crear cuenta</MenuItem></a>
        </>
      )
    }
    return (
      <>
        <a className='menu-item-link' href={USER_PROFILE_PATH}><MenuItem href={LOGIN_PATH}>Perfil</MenuItem></a>
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
    <>
      <IconButton style={{ margin: "0 5px" }}
        edge="end"
        size='large'
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleUserMenuOpen}
        color="inherit"
      >
        <LiaUserCircle />
      </IconButton>
      {renderMenu}
    </>
  );
};

export default React.memo(DropdownMenu);