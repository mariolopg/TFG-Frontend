import { useRef } from "react";
import { useHistory } from "react-router";
import {
  useDeactivateMutation,
  useUserProfileQuery,
} from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";
import { useAppSelector } from "../../../hooks/appHooks";
import { selectUserId } from "../../../redux/authSlice";

const useUserProfile = () => {
  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);

  const builderId = useAppSelector(selectUserId);

  const { data: user, isSuccess } = useUserProfileQuery(builderId);
  const [deactivate, responseDeactivate] = useDeactivateMutation();

  function handleDelete() {
    deactivate(null);
  }

  if (responseDeactivate.isSuccess) {
    history.push(ROOT_PATH);
    location.reload();
  }

  return { user, isSuccess, modal, handleDelete };
};

export default useUserProfile;
