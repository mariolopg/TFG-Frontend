import { DEFAULT_CARD_IMG } from "../../../constants";

const useBuildListComponent = () => {
  const getImageURL = (build: any) => {
    if (build.images.length == 0) return DEFAULT_CARD_IMG;
    return build.images[0].image;
  };

  return { getImageURL };
};

export default useBuildListComponent;
