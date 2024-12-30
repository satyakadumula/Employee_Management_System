import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'

const CreateEmployeeComponent = () => {
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName:"",
        lastName:"",
        email:""
    })

    const cancelForm=(e)=>{
        e.preventDefault();
        navigate("/employees");
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({... employee,[name]:value});
    }

    const saveForm=(e)=>{
        e.preventDefault();
        EmployeeService.addEmployee(employee).then(res=>{
            navigate("/employees");
        })
    }

    return (
        <div className='container'>
            <div className='card mt-5 col-md-6 offset-3'>
                <h3 className='pt-4 text-center'>Add Employee</h3>
                <div className='card-body'>
                    <form>
                        <label className='my-3' for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" className='form-control' 
                        value={employee.firstName} onChange={handleChange}/>

                        <label className='my-3' for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className='form-control' 
                        value={employee.lastName} onChange={handleChange}/>

                        <label className='my-3' for="email">Email</label>
                        <input type="text" id="email" name="email" className='form-control' 
                        value={employee.email} onChange={handleChange}/>

                        <div className='text-center'>
                            <button className='btn btn-danger mt-3 px-5' onClick={cancelForm}>Cancel</button>
                            <button className='btn btn-success mt-3 ms-2 px-5' onClick={saveForm}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent
