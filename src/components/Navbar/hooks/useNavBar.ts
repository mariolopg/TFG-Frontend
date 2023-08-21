import { useState } from "react";
import { useLogoutMutation } from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";

const useNavBar = () => {
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
        window.location.replace(ROOT_PATH);
      }
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
