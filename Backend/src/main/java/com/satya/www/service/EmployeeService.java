package com.satya.www.service;

import java.util.List;
import java.util.Optional;

import com.satya.www.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.satya.www.model.Employee;
import com.satya.www.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}

	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	public Employee getEmployeeDetails(Long id) {
		return employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with id:"+id+" doesn't exist"));
//		Optional<Employee> findEmployee = employeeRepository.findById(id);
//		if(findEmployee.isEmpty()) {
//			throw new ResourceNotFoundException("No Employee exist with the id:"+id);
//		}
//		Employee employee = findEmployee.get();
//		return employeeRepository.save(employee);	
	}
	
	public ResponseEntity<Employee> updateEmployeeDetails(Long id, Employee newEmp) {
		Employee oldEmp = getEmployeeDetails(id);
		oldEmp.setFirstName(newEmp.getFirstName());
		oldEmp.setLastName(newEmp.getLastName());
		oldEmp.setEmail(newEmp.getEmail());
		employeeRepository.save(oldEmp);
		return ResponseEntity.ok(oldEmp);
	}

	public ResponseEntity<Employee> deleteEmployeeDetails(Long id) {
		Employee employee = getEmployeeDetails(id);
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
