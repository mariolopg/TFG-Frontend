import { useCallback } from "react";

import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { es, enGB } from "date-fns/locale";

const useProfile = () => {
  const { t, i18n } = useTranslation();
  const initials = useCallback((firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }, []);

  const dateJoined = useCallback((date: string) => {
    return format(parseISO(date), t("dateFormat", { ns: "common" }), {
      locale: enGB,
    });
  }, []);

  return { initials, dateJoined };
};

export default useProfile;
