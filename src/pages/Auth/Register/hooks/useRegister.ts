import { useState } from "react";
import {
  RegisterErrorsInterface,
  RegisterInterface,
} from "../../../../domain/types";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../../domain/api/apiSlice";
import { LOGIN_PATH, ROOT_PATH } from "../../../../constants";

const useRegister = () => {
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
        window.location.replace(ROOT_PATH);
      }
    });
  }

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  if (responseRegister.isSuccess) {
  }

  if (responseLogin.isSuccess) {
    window.location.replace(LOGIN_PATH);
  }

  return {
    user,
    errors,
    setValue,
    handleSubmitRegister,
  };
};

export default useRegister;
