"use strict";
class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}
class EmployeesCollection {
	#employyes;
	
	constructor() {
		this.#employyes = [];
	}
	add(employee) {
		this.#employyes.push(employee);
	}
	show() {
		for (let employee of this.#employyes) {
			console.log(employee.getName());
		}
  }
}

let uc = new EmployeesCollection;

uc.add(new Employee('john'));
uc.add(new Employee('eric'));
uc.add(new Employee('kyle'));

uc.show();