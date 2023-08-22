import { useState } from "react";
import { useAppSelector } from "../../../hooks/appHooks";
import { selectToken } from "../../../redux/authSlice";
import { useLogoutMutation } from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";
import { useHistory } from "react-router";

const useNavBar = () => {
  const history = useHistory();
  const isLogged = useAppSelector(selectToken);
  const [logout, response] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(null).then((value: any) => {
      if (!value.error) {
        setAnchorEl(null);
        history.push(ROOT_PATH);
        location.reload();
      }
    });
  };

  const menuId = "accoutn-menu";

  return {
    isLogged,
    menuId,
    anchorEl,
    isMenuOpen,
    handleProfileMenuOpen,
    handleMenuClose,
    handleLogout,
  };
};

export default useNavBar;
