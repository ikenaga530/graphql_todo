import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Task } from "../types/task";
import { CREATE_TASK } from "../mutations/taskMutations";
import { GET_TASKS } from "../queries/taskQueries";
import { useNavigate } from "react-router-dom";

export default function AddTask({ userId }: { userId: number }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidDueDate, setIsInvalidDueDate] = useState(false);
  const navigate = useNavigate();
  const [createTask] = useMutation<{ createTask: Task }>(CREATE_TASK);

  const handleAddTask = async () => {
    let canAddTask = true;

    // TODOバリデーション
    if (name === "") {
      setIsInvalidName(true);
      canAddTask = false;
    } else {
      setIsInvalidName(false);
    }

    //日付型にparseできない場合
    if (!Date.parse(dueDate)) {
      setIsInvalidDueDate(true);
      canAddTask = false;
    } else {
      setIsInvalidDueDate(false);
    }

    if (canAddTask) {
      const createTaskInput = { name, dueDate, description, userId };
      try {
        await createTask({
          variables: { createTaskInput },
          refetchQueries: [{ query: GET_TASKS, variables: { userId } }],
        }); // TODO追加後に再取得
        resetState();
        setOpen(false);
      } catch (err: any) {
        //Tokenが無効な場合
        if (err.message === "Unauthorized") {
          localStorage.removeItem("token");
          alert("トークン有効期限切れ");
          navigate("/signin");
          return;
        }
        console.error(err);
        alert("登録失敗");
      }
    }
  };

  // TODO追加ボタンを押したときのリセット処理
  const resetState = () => {
    setName("");
    setDueDate("");
    setDescription("");
    setIsInvalidName(false);
    setIsInvalidDueDate(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetState();
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ width: "270px" }}
        onClick={handleClickOpen}
      >
        TODO追加
      </Button>
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>TODO</DialogTitle>
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
          <Button onClick={handleAddTask}>追加</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
