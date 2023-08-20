import { useState } from "react";
import { LoginErrorsInterface, LoginInterface } from "../../../../domain/types";
import { useLoginMutation } from "../../../../domain/api/apiSlice";
import { useHistory } from "react-router";
import { ROOT_PATH } from "../../../../constants";

const useLogin = () => {
  const navigate = useHistory();

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

  return { user, errors, setValue, handleSubmitLogin };
};

export default useLogin;
