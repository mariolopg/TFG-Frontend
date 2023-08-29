import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { IoEarthOutline } from "react-icons/io5"
import useDropdownLanguage from './hooks/useDropdownLanguage';
import { useTranslation } from "react-i18next";


const DropdownLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { handleLanguageChange, anchorEl, menuId, isMenuOpen, handleLanguageMenuOpen, handleMenuClose } = useDropdownLanguage()

  function languageHandleChange() {
    i18n.changeLanguage("es");
  }

  function GetmenuItems() {
    return (
      <>
        <MenuItem onClick={() => { handleLanguageChange("es") }}>{t('spanish', { ns: 'common' })}</MenuItem>
        <MenuItem onClick={() => { handleLanguageChange("enGB") }}>{t('english', { ns: 'common' })}</MenuItem>
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