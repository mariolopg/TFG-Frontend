import { useEffect, useState } from "react";
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
  const isLogged = useAppSelector(selectIsLogged);

  if (isLogged) {
    history.push(ROOT_PATH);
    location.reload();
  }

  const [register, responseRegister] = useRegisterMutation();
  const [login, responseLogin] = useLoginMutation();

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
    register(user);
  }

  useEffect(() => {
    if (responseRegister.isSuccess) {
      logUser();
    } else if (responseRegister.isError && "data" in responseRegister.error) {
      setErrors(responseRegister.error.data as RegisterErrorsInterface);
    }
  }, [responseRegister]);

  function logUser() {
    const loginUserData = {
      username: user.username,
      password: user.password1,
    };
    login(loginUserData);
  }

  useEffect(() => {
    if (responseLogin.isSuccess) {
      history.push(ROOT_PATH);
      location.reload();
    }
  }, [responseLogin]);

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
