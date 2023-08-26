import { useGetGPUsQuery } from "../../../../domain/api/apiSlice";

const useGPUList = () => {
  const { data: gpus, isSuccess } = useGetGPUsQuery(null);

  return { gpus, isSuccess };
};

export default useGPUList;
