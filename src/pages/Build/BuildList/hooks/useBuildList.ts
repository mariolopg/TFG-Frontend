import { useGetBuildsQuery } from "../../../../domain/api/apiSlice";

const useBuildList = () => {
  const { data: builds, isSuccess } = useGetBuildsQuery(null);

  return { builds, isSuccess };
};

export default useBuildList;
