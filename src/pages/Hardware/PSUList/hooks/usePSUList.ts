import { useGetPSUsQuery } from "../../../../domain/api/apiSlice";

const useSSDList = () => {
  const { data: psus, isSuccess } = useGetPSUsQuery(null);

  return { psus, isSuccess };
};

export default useSSDList;
