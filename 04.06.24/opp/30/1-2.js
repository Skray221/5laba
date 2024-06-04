"use strict";
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}


class Employee extends User {
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
}

let employee = new Employee;

employee.setName('john');
employee.setSalary('10000');

let name = employee.getName();
let salary = employee.getSalary();
console.log(name, salary);