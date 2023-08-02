import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addemployee} from '../../redux/employeeSlice';
import { Link } from 'react-router-dom';

import InputField from '../../utils/EditField'
import './addemployee.css'

const AddEmployee=()=>{
    const dispatch = useDispatch();
    const user=useSelector((state)=>state.employee.user);
    const[name,setname] = useState()
    const[desig,setdesig] = useState()
    const[dept,setdept] = useState()
    const[doj,setdoj] = useState()
    const [address,setaddress] = useState();
    const submit=()=>{
        const obj={
            id:name+dept,
            name,
            designation:desig,
            department:dept,
            DOJ:doj,
            address
        }
        dispatch(addemployee(obj));

    }
    return(
        <div className='add'>
            {user.email &&
            <>
            <h1>Add Employee</h1>
            <div className='forms'>
                <InputField name="Name" type="text" placeholder="Name" setvalue={setname}  />
                <InputField name="Designation" type="text" placeholder="Name" setvalue={setdesig}  />
                <InputField name="Department" type="text" placeholder="Name" setvalue={setdept}  />
                <InputField name="Date of joining" type="date" placeholder="Name" setvalue={setdoj}  />
                <InputField name="Address" type="text" placeholder="Name" setvalue={setaddress}  />
                <div className='add_button'>
                    <button onClick={submit}>Add</button>
                </div>
            </div>
            </>
}
{!user.email && <>Please <Link to="/login" >Login</Link> to add employee</>}
        </div>
    )
}

export default AddEmployee