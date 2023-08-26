import { useGetAirCoolersQuery } from "../../../../domain/api/apiSlice";

const useACList = () => {
  const { data: airCoolers, isSuccess } = useGetAirCoolersQuery(null);

  return { airCoolers, isSuccess };
};

export default useACList;
