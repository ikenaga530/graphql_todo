import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, dueDate: string, status: string) {
  return { name, dueDate, status };
}

const rows = [
  createData("task1", "2024-02-04", "PENDING"),
  createData("task2", "2024-02-04", "IN_PROGRESS"),
  createData("task3", "2024-02-04", "DONE"),
];

export default function TaskList() {
  return (
    <TableContainer component={Paper} sx={{ width: "85%", m: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TODO</TableCell>
            <TableCell align="right">Due</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dueDate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
