"use strict";
class User {
	setAge(age) {
		if (age >= 0) {
			this.age = age;
		} else {
			throw new Error('need age more 0');
		}
	}
}
class Employee {
	setAge(age) {
		if (age >= 0 && age <= 120) {
				this.age = age;
			} else {
				throw new Error('need age more than 0 or less than 120');
			}
		}
	}
