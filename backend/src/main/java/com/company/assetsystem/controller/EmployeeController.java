package com.company.assetsystem.controller;

import com.company.assetsystem.entity.Employee;
import com.company.assetsystem.repository.EmployeeRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee create(@Valid @RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
}

