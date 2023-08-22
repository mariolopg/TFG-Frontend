import { useState } from "react";
import { LoginErrorsInterface, LoginInterface } from "../../../../domain/types";
import { useLoginMutation } from "../../../../domain/api/apiSlice";
import { useHistory } from "react-router";
import { ROOT_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectToken } from "../../../../redux/authSlice";

const useLogin = () => {
  const navigate = useHistory();
  const token = useAppSelector(selectToken);

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
      } else {
        navigate.push(ROOT_PATH);
      }
    });
  };

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  if (!!token) {
    window.location.replace(ROOT_PATH);
  }

  return { user, errors, spinner: !!token, setValue, handleSubmitLogin };
};

export default useLogin;
