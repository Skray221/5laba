"use strict";
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.#capeFirst(this.name);
	}
	
	#capeFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

class Employee extends User {
	setSurn(surn) {
		this.surn = surn;
	}
	getSurn() {
		return this.surn;
	}
}

class Employee extends User {
	setSurn(surn) {
		this.surn = surn;
	}
	getSurn() {
		return this.#capeFirst(this.surn); // будет ошибка
	}
}