import { useEffect, useState } from "react";
import {
  useCreateBuildMutation,
  useCreateImageMutation,
} from "../../../../domain/api/apiSlice";
import { BuildErrorsInterface, BuildInterface } from "../../../../domain/types";
import { BUILD_BASE_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectUserId } from "../../../../redux/authSlice";
import { useHistory } from "react-router";

const useConfigurator = () => {
  const history = useHistory();
  const [postBuild, response] = useCreateBuildMutation();
  const [postImage, responseImage] = useCreateImageMutation();

  const [build, setBuild] = useState<BuildInterface>({
    name: "",
    builder: useAppSelector(selectUserId),
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

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(
    undefined
  );

  function handleSubmit() {
    postBuild(build);
  }

  useEffect(() => {
    if (response.isSuccess) {
      images?.map((image) => {
        var formData = new FormData();
        formData.append("build", response.data.id);
        formData.append("image", image);
        postImage(formData);
      });
      history.push(`${BUILD_BASE_PATH}/${response.data.id}`);
      location.reload();
    } else if (response.isError && "data" in response.error) {
      setErrors(response.error.data as BuildErrorsInterface);
    }
  }, [response]);

  return { build, errors, images, handleSubmit, setBuild, setImages };
};

export default useConfigurator;
