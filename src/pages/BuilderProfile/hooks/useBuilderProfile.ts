import { useHistory, useParams } from "react-router";
import { useUserProfileQuery } from "../../../domain/api/apiSlice";
import { USER_PROFILE_PATH } from "../../../constants";
import { useAppSelector } from "../../../hooks/appHooks";
import { selectUserId } from "../../../redux/authSlice";

const useBuilderProfile = () => {
  const history = useHistory();
  type params = { id: string };
  const { id } = useParams<params>();

  const builderId = useAppSelector(selectUserId);

  if (id == builderId) {
    history.push(USER_PROFILE_PATH);
    location.reload();
  }

  const { data: user, isSuccess } = useUserProfileQuery(id);

  return { user, isSuccess };
};

export default useBuilderProfile;
