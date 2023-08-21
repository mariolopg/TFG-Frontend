import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/appHooks";
import { selectToast, setToastIsOpen } from "../../../redux/toastSlide";

const useToast = () => {
  const dispatch = useAppDispatch();
  const toast = useAppSelector(selectToast);
  const onDismiss = () => {
    dispatch(setToastIsOpen(false));
  };

  return { toast, onDismiss };
};

export default useToast;
