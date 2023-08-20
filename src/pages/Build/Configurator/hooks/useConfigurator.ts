import { useState } from "react";
import {
  useCreateBuildMutation,
  useCreateImageMutation,
} from "../../../../domain/api/apiSlice";
import { BuildErrorsInterface, BuildInterface } from "../../../../domain/types";
import { BUILD_BASE_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectUserId } from "../../../../redux/authSlice";

const useConfigurator = () => {
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
    postBuild(build).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        images?.map((image) => {
          var formData = new FormData();
          formData.append("build", value.data.id);
          formData.append("image", image);
          postImage(formData);
        });
        window.location.replace(`${BUILD_BASE_PATH}/${value.data.id}`);
      }
    });
  }

  return { build, errors, images, handleSubmit, setBuild, setImages };
};

export default useConfigurator;
