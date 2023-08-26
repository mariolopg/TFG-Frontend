import { useGetHDDsQuery } from "../../../../domain/api/apiSlice";

const useHDDList = () => {
  const { data: hdds, isSuccess } = useGetHDDsQuery(null);

  return { hdds, isSuccess };
};

export default useHDDList;
