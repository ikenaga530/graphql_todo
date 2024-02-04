import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../types/task";
import { DELETE_TASK } from "../mutations/taskMutations";
import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/taskQueries";
import { useNavigate } from "react-router-dom";

const DeleteTask = ({ id, userId }: { id: number; userId: number }) => {
  const [deleteTask] = useMutation<{ deleteTask: Task }>(DELETE_TASK);
  const navigate = useNavigate();
  const handleDeleteTask = async () => {
    try {
      await deleteTask({
        variables: { id },
        refetchQueries: [{ query: GET_TASKS, variables: { userId } }],
      });
      alert("削除しました");
    } catch (err: any) {
      if (err.message === "Unauthorized") {
        localStorage.removeItem("token");
        alert("トークン有効期限切れ");
        navigate("/signin");
        return;
      }
      alert("削除失敗");
    }
  };

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton onClick={handleDeleteTask}>
          <DeleteIcon color="action" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DeleteTask;
