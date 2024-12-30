import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link } from 'react-router-dom';

export default class EmployeeListComponenet extends Component {
    constructor(){
        super();

        this.state={
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees()
        .then(
            res=>{
                this.setState({employees:res.data});
                }
            )
    }

    deleteRecord=(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then(res=>{
            EmployeeService.getEmployees().then(res=>{
                this.setState({employees:res.data})
            })
        });
    }

    render() {
        return (
            <div className='container mt-5'>
                <h2 className='text-center'>Employee Data</h2>
                <div className='row mt-5'>
                    <Link to="/add-employee" className='btn btn-primary mb-4'>Add Employee</Link>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>FIRSTNAME</td>
                                <td>LASTNAME</td>
                                <td>EMAIL</td>
                                <td className='text-center'>ACTIONS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees
                                .map(
                                    employee=>{
                                        return  <tr key={employee.id}>
                                                    <td>{employee.id}</td>
                                                    <td>{employee.firstName}</td>
                                                    <td>{employee.lastName}</td>
                                                    <td>{employee.email}</td>
                                                    <td className='text-center'>
                                                        <Link to={`/update-employee/${employee.id}`} className='btn btn-info me-2'>Update</Link>
                                                        <button className="btn btn-danger ms-4" onClick={()=>this.deleteRecord(employee.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            }
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            )   
        }
    }
