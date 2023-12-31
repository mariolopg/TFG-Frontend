import { useHistory, useParams } from "react-router";
import {
  useCreateImageMutation,
  useGetBuildQuery,
  useUpdateBuildMutation,
} from "../../../../domain/api/apiSlice";
import { useEffect, useState } from "react";
import { BuildErrorsInterface, BuildInterface } from "../../../../domain/types";
import { BUILD_BASE_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectIsAdmin, selectUserId } from "../../../../redux/authSlice";

const useBuildEdit = () => {
  type params = { id: string };
  const { id } = useParams<params>();
  const builderId = useAppSelector(selectUserId);
  const isAdmin = useAppSelector(selectIsAdmin);

  const history = useHistory();

  const { data: build, isSuccess } = useGetBuildQuery(id);
  const [updateBuild, response] = useUpdateBuildMutation();
  const [postImage, responseImage] = useCreateImageMutation();

  const [buildUpdates, setBuildUpdates] = useState<BuildInterface>({
    name: "",
    description: "",
    cpu: "",
    motherboard: "",
    gpu: "",
    ram: "",
    air_cooler: "",
    liquid_cooler: "",
    hdd: "",
    ssd: "",
    psu: "",
    case: "",
  });

  const [images, setImages] = useState<File[] | undefined>();
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(
    undefined
  );

  const handleSubmit = () => {
    updateBuild({ id: id, body: buildUpdates });
  };

  useEffect(() => {
    if (response.isSuccess) {
      images?.map((image: any) => {
        var formData = new FormData();
        formData.append("build", response.data.id);
        formData.append("image", image);
        postImage(formData);
      });

      history.push(`${BUILD_BASE_PATH}/${id}`);
      location.reload();
    } else if (response.isError && "data" in response.error) {
      setErrors(response.error.data as BuildErrorsInterface);
    }
  }, [response]);

  useEffect(() => {
    if (build) {
      setBuildUpdates(build);
    }
  }, [build]);

  return {
    isAdmin,
    builderId,
    build,
    buildUpdates,
    images,
    errors,
    setBuildUpdates,
    setImages,
    handleSubmit,
    isSuccess,
  };
};

export default useBuildEdit;
