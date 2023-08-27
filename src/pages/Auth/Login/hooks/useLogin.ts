import { useEffect, useState } from "react";
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
    login(user);
  }

  useEffect(() => {
    if (response.isSuccess) {
      history.push(ROOT_PATH);
      location.reload();
    } else if (response.isError && "data" in response.error) {
      setErrors(response.error.data as LoginErrorsInterface);
    }
  }, [response]);

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  return { user, errors, isLogged, response, setValue, handleSubmitLogin };
};

export default useLogin;
