import { useCallback } from "react";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

const useProfile = () => {
  const initials = useCallback((firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }, []);

  const dateJoined = useCallback((date: string) => {
    return format(parseISO(date), "d 'de' MMMM 'de' yyyy", { locale: es });
  }, []);

  return { initials, dateJoined };
};

export default useProfile;
