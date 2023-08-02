import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from "react-redux";
import { setopen,selectInfo } from "../../redux/employeeSlice";
//.mport { getallemployees } from "../../redux/employeeSlice";
const Employee_Table = () => {
  const dispatch = useDispatch();
  const allemployees = useSelector((state)=>state.employee.allemployees);
  const searchTerm = useSelector((state)=>state.employee.search)
 const handleOpen=(info)=>{
  dispatch(setopen())
  dispatch(selectInfo(info))
}
  return(
    <div style={{padding:"10px"}}>
      <h2>Employee Details</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Designatioon</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Date of joining</TableCell>
            <TableCell align="right">Addresss</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allemployees.filter((row)=>!searchTerm.length||row.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.DOJ}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right" styles={{display:"flex",gap:"10px"}}>
                <EditIcon onClick={()=>handleOpen(row)}/>
                <DeleteIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
};

export default Employee_Table;
