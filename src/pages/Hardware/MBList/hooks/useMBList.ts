import { useGetMotherboardsQuery } from "../../../../domain/api/apiSlice";

const useMBList = () => {
  const { data: mbs, isSuccess } = useGetMotherboardsQuery(null);

  return { mbs, isSuccess };
};

export default useMBList;
