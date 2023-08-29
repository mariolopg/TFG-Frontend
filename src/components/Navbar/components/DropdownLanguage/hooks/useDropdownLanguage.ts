import { useEffect, useState } from "react";
import {
  selectLanguage,
  setLanguage,
} from "../../../../../redux/languageSlice";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/appHooks";

const useDropdownLanguage = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lng: string) => {
    dispatch(setLanguage(lng));
    setAnchorEl(null);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "language-menu";

  return {
    handleLanguageChange,
    menuId,
    anchorEl,
    isMenuOpen,
    handleLanguageMenuOpen,
    handleMenuClose,
  };
};

export default useDropdownLanguage;
