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
import { selectUserId } from "../../../../redux/authSlice";

const useBuildEdit = () => {
  type params = { id: string };
  const { id } = useParams<params>();
  const builderId = useAppSelector(selectUserId);

  const history = useHistory();

  const { data: build, isSuccess } = useGetBuildQuery(id);
  const [updateBuild, response] = useUpdateBuildMutation();
  const [postImage, responseImage] = useCreateImageMutation();

  const [buildUpdates, setBuildUpdates] = useState<BuildInterface>({
    id: id,
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
    updateBuild({ id: id, body: buildUpdates }).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        images?.map((image: any) => {
          var formData = new FormData();
          formData.append("build", value.data.id);
          formData.append("image", image);
          postImage(formData);
        });
      }
    });
  };

  useEffect(() => {
    if (build) {
      setBuildUpdates(build);
    }
  }, [build]);

  if (response.isSuccess) {
    history.push(`${BUILD_BASE_PATH}/${id}`);
    location.reload();
  }

  return {
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
