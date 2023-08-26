import { useGetCPUsQuery } from "../../../../domain/api/apiSlice";

const useCPUList = () => {
  const { data: cpus, isSuccess } = useGetCPUsQuery(null);

  return { cpus, isSuccess };
};

export default useCPUList;
