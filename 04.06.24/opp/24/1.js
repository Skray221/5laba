"use strict";
class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }
}

let employees = [
    new Employee('john', 50000),
    new Employee('eric', 60000),
    new Employee('kyle', 55000),
];

for (let employee of employees) {
    console.log(employee.getName() + ' - ' + employee.getSalary());
}

  