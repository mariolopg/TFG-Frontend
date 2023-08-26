import { useGetCasesQuery } from "../../../../domain/api/apiSlice";

const useCaseList = () => {
  const { data: cases, isSuccess } = useGetCasesQuery(null);

  return { cases, isSuccess };
};

export default useCaseList;
