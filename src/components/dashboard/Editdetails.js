import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setopen, updateDetails } from "../../redux/employeeSlice";
import InputField from "../../utils/EditField";
import "./edit.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const EditModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.employee.openEdit);
  let info = useSelector((state) => state.employee.selectedInfo);

  const [name, setname] = useState();
  const [desig, setdesig] = useState();
  const [dept, setdept] = useState();
  const [doj, setdoj] = useState();
  const [address, setaddress] = useState();
  const submit = () => {
    const obj = {
      id: info.id,
      name,
      designation: desig,
      department: dept,
      DOJ: doj,
      address,
    };
    dispatch(updateDetails(obj));
    console.log(obj);
    dispatch(setopen());
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(setopen())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <h2>Edit Details</h2>
        <div className="editBox">
          <InputField
            name="Name"
            type="text"
            placeholder="Name"
            setvalue={setname}
            value={info.name}
          />
          <InputField
            name="Designation"
            type="text"
            placeholder="Name"
            setvalue={setdesig}
            value={info.designation}
          />
          <InputField
            name="Department"
            type="text"
            placeholder="Name"
            setvalue={setdept}
            value={info.department}
          />
          <InputField
            name="Date of joining"
            type="date"
            placeholder="Name"
            setvalue={setdoj}
            value={info.DOJ}
          />
          <InputField
            name="Address"
            type="text"
            placeholder="Name"
            setvalue={setaddress}
            value={info.address}
          />
          <button onClick={submit}>Edit</button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditModal;
