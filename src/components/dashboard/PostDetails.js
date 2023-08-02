import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { setopen, selectInfo } from "../../redux/employeeSlice";
//.mport { getallemployees } from "../../redux/employeeSlice";
const Posts = () => {
  const [posts, setposts] = useState([]);
  const fetchPosts = async () => {
    const fetch_data = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await fetch_data.json();
    console.log(data);
    setposts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Posts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">User Id</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">{row.userId}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Posts;
