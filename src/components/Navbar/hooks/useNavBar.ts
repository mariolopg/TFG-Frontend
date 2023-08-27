import { useAppSelector } from "../../../hooks/appHooks";
import { selectIsLogged } from "../../../redux/authSlice";

const useNavBar = () => {
  const isLogged = useAppSelector(selectIsLogged);

  return {
    isLogged,
  };
};

export default useNavBar;
