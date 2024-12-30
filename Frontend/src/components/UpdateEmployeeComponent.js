import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';


const UpdateEmployeeComponent = () => {
    let navigate=useNavigate();

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const {id}=useParams();


    // useEffect is used to show bring the data (present in the database) to the frontend (in the input field)
    useEffect(()=>{
        EmployeeService.getEmployee(id).then(res=>{
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        })
    },[])

    const cancelForm=(e)=>{
        e.preventDefault();
        navigate("/employees");
    }

    const updateForm=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,email};
        if(id){
            EmployeeService.updateEmployee(id,employee).then(res=>{
                navigate("/employees");
            })
        }else{
            EmployeeService.addEmployee(employee).then(res=>{
                navigate("/employees");
            })
        }
    }

    return (
        <div className='container'>
            <div className='card mt-5 col-md-6 offset-3'>
                <h3 className='pt-4 text-center'>Update Employee</h3>
                <div className='card-body'>
                    <form>
                        <label className='my-3' for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" className='form-control'
                        value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>

                        <label className='my-3' for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className='form-control'
                        value={lastName} onChange={(e)=> setLastName(e.target.value)}/>

                        <label className='my-3' for="email">Email</label>
                        <input type="text" id="email" name="email" className='form-control' 
                        value={email} onChange={(e)=> setEmail(e.target.value)}/>

                        <div className='text-center'>
                            <button className='btn btn-danger mt-3 px-5' onClick={cancelForm}>Cancel</button>
                            <button className='btn btn-success mt-3 ms-2 px-5' onClick={updateForm}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployeeComponent
