import { useRef, useState } from "react";
import {
  useCreateCommentMutation,
  useDeleteBuildMutation,
  useGetBuildQuery,
} from "../../../../domain/api/apiSlice";
import {
  CommentErrorsInterface,
  CommentInterface,
} from "../../../../domain/types";
import { useParams } from "react-router";
import { BUILD_LIST_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import { selectUserId } from "../../../../redux/authSlice";

const useBuildDetail = () => {
  type params = { id: string };
  const { id } = useParams<params>();

  const modal = useRef<HTMLIonModalElement>(null);

  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [commentInput, setCommentInput] = useState<CommentInterface>({
    build: id,
    builder: useAppSelector(selectUserId),
    comment: "",
  });
  const [errors, setErrors] = useState<CommentErrorsInterface | undefined>(
    undefined
  );

  const { data: build, isSuccess } = useGetBuildQuery(id);
  const [deleteBuild, responseDelete] = useDeleteBuildMutation();
  const [postComment, responseComment] = useCreateCommentMutation();

  const setValue = (field: string, event: any) => {
    setCommentInput({ ...commentInput, [field]: event.target.value });
  };

  const handleSubmitComment = () => {
    postComment(commentInput).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data);
      } else {
        setComments([...comments, commentInput]);
        setCommentInput({ ...commentInput, comment: "" });
      }
    });
  };

  const handleDelete = () => {
    deleteBuild(id);
  };

  if (responseDelete.isSuccess) {
    window.location.replace(BUILD_LIST_PATH);
  }

  return {
    id,
    build,
    comments,
    errors,
    modal,
    comment: commentInput.comment,
    setValue,
    handleSubmitComment,
    handleDelete,
    isSuccess,
    isSuccessDelete: responseDelete.isSuccess,
  };
};

export default useBuildDetail;
