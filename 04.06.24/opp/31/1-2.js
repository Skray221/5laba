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
	setYear(year) {
		if (year >= 18 && year <= 65) {
			this.year = year;
		} else {
			throw new Error('employee age error');
	}
}
	getYear() {
		return this.year;
	}
}

let employee = new Employee;

employee.setName('john');
employee.setYear('15');

let name = employee.getName();
let year = employee.getYear();
console.log(name, year);