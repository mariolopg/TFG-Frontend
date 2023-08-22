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

  const [user, setUser] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrorsInterface | undefined>(
    undefined
  );

  const [loginUser, response] = useLoginMutation();

  const handleSubmitLogin = () => {
    loginUser(user).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      }
    });
  };

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  if (isLogged || response.isSuccess) {
    history.push(ROOT_PATH);
    location.reload();
  }

  return { user, errors, isLogged, response, setValue, handleSubmitLogin };
};

export default useLogin;
