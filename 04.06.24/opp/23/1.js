"use strict";
class Position {
	constructor(title) {
	  this.title = title;
	}
  }
  
  class Department {
	constructor(name) {
	  this.name = name;
	}
  }
  
  class Employee {
	constructor(name, position, department) {
	  this.name = name;
	  this.position = position;
	  this.department = department;
	}
  }
  
  let position = new Position('Разработчик');
  let department = new Department('ИТ');
  
  let employee = new Employee('Иван Иванов', position, department);
  
  console.log(`${employee.name}, ${employee.position.title}, ${employee.department.name}`);
  