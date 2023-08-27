import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { IoEarthOutline } from "react-icons/io5"
import useDropdownLanguage from './hooks/useDropdownLanguage';

const DropdownLanguage: React.FC = () => {

  const { currentLanguage, anchorEl, menuId, isMenuOpen, handleLanguageMenuOpen, handleMenuClose } = useDropdownLanguage()

  function GetmenuItems() {
    return (
      <>
        <MenuItem>Español</MenuItem>
        <MenuItem>Inglés</MenuItem>
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

        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleLanguageMenuOpen}
        color="inherit"
      >
        <IoEarthOutline />
      </IconButton>
      {renderMenu}
    </>
  );
};

export default React.memo(DropdownLanguage);