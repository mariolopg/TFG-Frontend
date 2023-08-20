import { DEFAULT_CARD_IMG } from "../../../../constants";
import { useGetBuildsQuery } from "../../../../domain/api/apiSlice";

const useBuildList = () => {
  const { data: builds, isSuccess } = useGetBuildsQuery(null);

  const getImageURL = (build: any) => {
    if (build.images.length == 0) return DEFAULT_CARD_IMG;
    return build.images[0].image;
  };

  return { builds, isSuccess, getImageURL };
};

export default useBuildList;
