import { useState } from "react";
import {
  RegisterErrorsInterface,
  RegisterInterface,
} from "../../../../domain/types";
import { useRegisterMutation } from "../../../../domain/api/apiSlice";
import { LOGIN_PATH, ROOT_PATH } from "../../../../constants";

const useRegister = () => {
  const [createUser, response] = useRegisterMutation();

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
    createUser(user).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        window.location.replace(ROOT_PATH);
      }
    });
  }

  const setValue = (field: string, event: any) => {
    setUser({ ...user, [field]: event.target.value });
  };

  if (response.isSuccess) {
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
