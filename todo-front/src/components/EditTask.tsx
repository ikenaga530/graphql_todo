import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Task } from "../types/task";
import { TaskStatus } from "../types/taskStatus";
import { UPDATE_TASK } from "../mutations/taskMutations";
import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/taskQueries";
import { useNavigate } from "react-router-dom";

export default function EditTask({
  task,
  userId,
}: {
  task: Task;
  userId: number;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(task.name);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidDueDate, setIsInvalidDueDate] = useState(false);
  const Navigate = useNavigate();
  const [updateTask] = useMutation<{ updateTask: Task }>(UPDATE_TASK);

  const handleEditTask = async () => {
    let canEditTask = true;

    // TODOバリデーション
    if (name === "") {
      setIsInvalidName(true);
      canEditTask = false;
    } else {
      setIsInvalidName(false);
    }

    //日付型にparseできない場合
    if (!Date.parse(dueDate)) {
      setIsInvalidDueDate(true);
      canEditTask = false;
    } else {
      setIsInvalidDueDate(false);
    }

    if (canEditTask) {
      const updateTaskInput = {
        id: task.id,
        name,
        dueDate,
        status,
        description,
      };
      try {
        await updateTask({
          variables: { updateTaskInput },
          refetchQueries: [{ query: GET_TASKS, variables: { userId } }],
        }); // TODO追加後に再取得
        resetState();
        setOpen(false);
      } catch (err: any) {
        //Tokenが無効な場合
        if (err.message === "Unauthorized") {
          localStorage.removeItem("token");
          alert("トークン有効期限切れ");
          Navigate("/signin");
          return;
        }

        alert("編集失敗");
      }
    }
  };

  // TODO更新ボタンを押したときのリセット処理
  const resetState = () => {
    setName(task.name);
    setDueDate(task.dueDate);
    setStatus(task.status);
    setDescription(task.description);
    setIsInvalidName(false);
    setIsInvalidDueDate(false);
  };

  const handleClickOpen = () => {
    resetState();
    setOpen(true);
  };

  const handleClose = () => {
    resetState();
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={handleClickOpen}>
          <EditIcon color="action" />
        </IconButton>
      </Tooltip>
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>編集</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="TODO名"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={isInvalidName}
            helperText={isInvalidName && "TODO名を入力してください"}
          />
          <TextField
            autoFocus
            margin="normal"
            id="due-date"
            label="期日"
            placeholder="YYYY-MM-DD"
            fullWidth
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            error={isInvalidDueDate}
            helperText={isInvalidDueDate && "YYYY-MM-DD形式で入力してください"}
          />
          <FormControl fullWidth={true} margin="normal">
            <InputLabel id="task-status-label">ステータス</InputLabel>
            <Select
              labelId="task-status-label"
              id="task-status"
              label="ステータス"
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
            >
              <MenuItem value={"PENDING"}>PENDING</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
              <MenuItem value={"DONE"}>DONE</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="備考"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleEditTask}>更新</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
