import { useCallback } from "react";

import { useTranslation } from "react-i18next";
import { Locale, format, parseISO } from "date-fns";
import { es, enGB } from "date-fns/locale";
import { useAppSelector } from "../../../hooks/appHooks";
import { selectLanguage } from "../../../redux/languageSlice";

// LANGUAGES
const LANGUAGE_CODES: Record<string, Locale> = {
  es: es,
  enGB: enGB,
};

const useProfile = () => {
  const currentLanguage = useAppSelector(selectLanguage);
  const { t, i18n } = useTranslation();
  const initials = useCallback((firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }, []);

  const dateJoined = useCallback(
    (date: string) => {
      return format(parseISO(date), t("dateFormat", { ns: "common" }), {
        locale: LANGUAGE_CODES[currentLanguage],
      });
    },
    [currentLanguage, t]
  );

  return { initials, dateJoined };
};

export default useProfile;
