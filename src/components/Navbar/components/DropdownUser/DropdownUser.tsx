import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LOGIN_PATH, REGISTER_PATH, USER_PROFILE_PATH } from '../../../../constants';
import useDropdownUser from './hooks/useDropdownUser';
import { LiaUserCircle } from 'react-icons/lia';
import { useTranslation } from 'react-i18next';


const DropdownMenu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isLogged, anchorEl, menuId, isMenuOpen, handleUserMenuOpen, handleMenuClose, handleLogout } = useDropdownUser()

  function GetmenuItems() {
    if (!isLogged) {
      return (
        <>
          <a className='menu-item-link' href={LOGIN_PATH}><MenuItem>{t('login', { ns: 'auth' })}</MenuItem></a>
          <a className='menu-item-link' href={REGISTER_PATH}><MenuItem>{t('register', { ns: 'auth' })}</MenuItem></a>
        </>
      )
    }
    return (
      <>
        <a className='menu-item-link' href={USER_PROFILE_PATH}><MenuItem href={LOGIN_PATH}>{t('profile', { ns: 'auth' })}</MenuItem></a>
        <MenuItem onClick={handleLogout}>{t('logout', { ns: 'auth' })}</MenuItem>
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