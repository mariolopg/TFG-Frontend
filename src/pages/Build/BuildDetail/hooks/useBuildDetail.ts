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
import { useHistory, useParams } from "react-router";
import { BUILD_LIST_PATH } from "../../../../constants";
import { useAppSelector } from "../../../../hooks/appHooks";
import {
  selectIsAdmin,
  selectIsLogged,
  selectUserFirstName,
  selectUserLastName,
  selectUserId,
  selectUserUsername,
} from "../../../../redux/authSlice";

export const useBuildDetail = () => {
  type params = { id: string };
  const { id } = useParams<params>();

  const history = useHistory();

  const builderUsername = useAppSelector(selectUserUsername);
  const isAdmin = useAppSelector(selectIsAdmin);
  const builderId = useAppSelector(selectUserId);
  const isLogged = useAppSelector(selectIsLogged);
  const firstName = useAppSelector(selectUserFirstName);
  const lastName = useAppSelector(selectUserLastName);

  const modal = useRef<HTMLIonModalElement>(null);

  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [commentInput, setCommentInput] = useState<CommentInterface>({
    build: id,
    builder: builderId,
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
    history.push(BUILD_LIST_PATH);
    location.reload();
  }

  return {
    id,
    build,
    comments,
    errors,
    modal,
    firstName,
    lastName,
    isAdmin,
    isLogged,
    builderId,
    builderUsername,
    comment: commentInput.comment,
    setValue,
    handleSubmitComment,
    handleDelete,
    isSuccess,
  };
};

export default useBuildDetail;
