import { useState } from "react";
import { LoginErrorsInterface, LoginInterface } from "../../../../domain/types";
import { useLoginMutation } from "../../../../domain/api/apiSlice";

import { ROOT_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectIsLogged } from "../../../../redux/authSlice";
import { useHistory } from "react-router";

const useLogin = () => {
  const history = useHistory();
  const isLogged = useAppSelector(selectIsLogged);

  if (isLogged) {
    history.push(ROOT_PATH);
    location.reload();
  }

  const [login, response] = useLoginMutation();

  const [user, setUser] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrorsInterface | undefined>(
    undefined
  );

  function handleSubmitLogin() {
    login(user).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        history.push(ROOT_PATH);
        location.reload();
      }
    });
  }

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  return { user, errors, isLogged, response, setValue, handleSubmitLogin };
};

export default useLogin;
