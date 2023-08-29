import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ROOT_PATH } from "../../../../../constants";
import { useAppSelector } from "../../../../../hooks/appHooks";
import { selectToken } from "../../../../../redux/authSlice";
import { useLogoutMutation } from "../../../../../domain/api/apiSlice";

const useDropdownUser = () => {
  const history = useHistory();
  const isLogged = useAppSelector(selectToken);
  const [logout, response] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(null);
  };

  useEffect(() => {
    if (response.isSuccess) {
      setAnchorEl(null);
      history.push(ROOT_PATH);
      // location.reload();
    }
  }, [response]);

  const menuId = "account-menu";

  return {
    isLogged,
    menuId,
    anchorEl,
    isMenuOpen,
    handleUserMenuOpen,
    handleMenuClose,
    handleLogout,
  };
};

export default useDropdownUser;
