import { useRef } from "react";
import { useHistory } from "react-router";
import {
  useDeactivateMutation,
  useUserProfileQuery,
} from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";
import { useAppSelector } from "../../../hooks/appHooks";
import {
  selectUserDateJoined,
  selectUserFirstName,
  selectUserId,
  selectUserLastName,
} from "../../../redux/authSlice";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

const useUserProfile = () => {
  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);

  const builderId = useAppSelector(selectUserId);
  const firstName = useAppSelector(selectUserFirstName);
  const lastName = useAppSelector(selectUserLastName);
  const dateJoined = format(
    parseISO(useAppSelector(selectUserDateJoined)),
    "d 'de' MMMM 'de' yyyy",
    { locale: es }
  );

  const { data: user, isSuccess } = useUserProfileQuery(builderId);
  const [deactivate, responseDeactivate] = useDeactivateMutation();

  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  function handleDelete() {
    deactivate(null);
  }

  if (responseDeactivate.isSuccess) {
    history.push(ROOT_PATH);
    location.reload();
  }

  return { user, initials, dateJoined, isSuccess, modal, handleDelete };
};

export default useUserProfile;
