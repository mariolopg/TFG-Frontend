import { useGetRAMSQuery } from "../../../../domain/api/apiSlice";

const useRAMList = () => {
  const { data: rams, isSuccess } = useGetRAMSQuery(null);

  return { rams, isSuccess };
};

export default useRAMList;
