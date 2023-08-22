import { useState } from "react";
import {
  RegisterErrorsInterface,
  RegisterInterface,
} from "../../../../domain/types";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../../domain/api/apiSlice";
import { ROOT_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectIsLogged } from "../../../../redux/authSlice";
import { useHistory } from "react-router";

const useRegister = () => {
  const history = useHistory();
  const [register, responseRegister] = useRegisterMutation();
  const [login, responseLogin] = useLoginMutation();
  const isLogged = useAppSelector(selectIsLogged);

  const [user, setUser] = useState<RegisterInterface>({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState<RegisterErrorsInterface | undefined>(
    undefined
  );

  function handleSubmitRegister() {
    register(user).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        logUser();
      }
    });
  }

  function logUser() {
    const loginUserData = {
      username: user.username,
      password: user.password1,
    };
    login(loginUserData).then((value: any) => {
      if (!value.error) {
        history.push(ROOT_PATH);
        location.reload();
      }
    });
  }

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  return {
    user,
    errors,
    isLogged,
    setValue,
    handleSubmitRegister,
  };
};

export default useRegister;
