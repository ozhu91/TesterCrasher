package com.addressBookApp.employee;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/employees")
public class EmployeeController {

    @GetMapping
    public List<Employee> getEmployee () {
        return List.of(
                new Employee(
                        1,
                        "Petrov Petr",
                        "petrov-p"
                )
        );
    }
}
