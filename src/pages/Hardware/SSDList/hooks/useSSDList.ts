import { useGetSSDsQuery } from "../../../../domain/api/apiSlice";

const useSSDList = () => {
  const { data: ssds, isSuccess } = useGetSSDsQuery(null);

  return { ssds, isSuccess };
};

export default useSSDList;
