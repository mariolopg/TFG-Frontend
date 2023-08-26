import { useGetLiquidCoolersQuery } from "../../../../domain/api/apiSlice";

const useLCList = () => {
  const { data: liquidCoolers, isSuccess } = useGetLiquidCoolersQuery(null);

  return { liquidCoolers, isSuccess };
};

export default useLCList;
