package com.satya.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.satya.www.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
