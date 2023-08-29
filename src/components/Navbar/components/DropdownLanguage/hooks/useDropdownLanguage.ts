import { useState } from "react";
import { useAppSelector } from "../../../../../hooks/appHooks";
import { selectToken } from "../../../../../redux/authSlice";

const useDropdownLanguage = () => {
  const currentLanguage = useAppSelector(selectToken);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "language-menu";

  return {
    currentLanguage,
    menuId,
    anchorEl,
    isMenuOpen,
    handleLanguageMenuOpen,
    handleMenuClose,
  };
};

export default useDropdownLanguage;
