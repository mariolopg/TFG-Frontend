import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useNavBar from './hooks/useNavBar';

import { PiDesktopTower } from "react-icons/pi"
import { LiaToolsSolid } from "react-icons/lia"
import { BsShop } from "react-icons/bs"
import { IoHardwareChipOutline } from "react-icons/io5"
import { BUILD_LIST_PATH, CONFIGURATOR_PATH, HARDWARE_BASE_PATH, ROOT_PATH } from '../../constants';
import { IonRouterLink } from '@ionic/react';
import DropdownUser from './components/DropdownUser/DropdownUser';
import DropdownLanguage from './components/DropdownLanguage/DropdownLanguage';

const NavBar: React.FC = () => {
  const { isLogged } = useNavBar();

  function GetConfiguratorLink() {
    if (!isLogged) { return null }
    return (
      <IconButton style={{ margin: "0 5px" }}
        edge="end"
        color="inherit"
        href={CONFIGURATOR_PATH}
      >
        <LiaToolsSolid />
      </IconButton>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            <IonRouterLink color="light" href={ROOT_PATH} >PC BUILDER</IonRouterLink>
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
              href={HARDWARE_BASE_PATH}
            >
              <IoHardwareChipOutline />
            </IconButton>
            <GetConfiguratorLink />
            <DropdownLanguage />
            <DropdownUser />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(NavBar);
