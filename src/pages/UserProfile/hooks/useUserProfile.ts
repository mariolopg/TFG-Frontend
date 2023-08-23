import { useRef } from "react";
import { useHistory } from "react-router";
import { useDeactivateMutation } from "../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../constants";

const useUserProfile = () => {
  const [deactivate, response] = useDeactivateMutation();

  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);

  function handleDelete() {
    deactivate(null);
  }

  if (response.isSuccess) {
    history.push(ROOT_PATH);
    location.reload();
  }

  return { modal, handleDelete };
};

export default useUserProfile;
