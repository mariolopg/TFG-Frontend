import { useState } from "react";
import { useLogoutMutation } from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";
import { useHistory } from "react-router";

const useNavBar = () => {
  const navigate = useHistory();
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
    logout(null).then(() => {
      setAnchorEl(null);
      navigate.push(ROOT_PATH);
    });
  };

  const menuId = "primary-search-account-menu";

  return {
    menuId,
    anchorEl,
    isMenuOpen,
    handleProfileMenuOpen,
    handleMenuClose,
    handleLogout,
  };
};

export default useNavBar;
