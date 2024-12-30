import axios from "axios";

const EMPLOYEE_BASE_API = "http://localhost:9090/api/v1/employees";
const ADD_EMPLOYEE = "http://localhost:9090/api/v1/add-employee";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_API);
    }

    addEmployee(employee){
        return axios.post(ADD_EMPLOYEE,employee);
    }

    getEmployee(employeeId){
        return axios.get(EMPLOYEE_BASE_API+'/'+employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_API+'/'+employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_API+"/"+employeeId);
    }

}

export default new EmployeeService();