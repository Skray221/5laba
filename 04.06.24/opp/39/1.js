"use strict";
class User {
 setName(name) {
  this._name = name;
 }
 getName() {
  return this._name;
 }
}
class Employee extends User {
 setYear(year) {
  this._year = year;
 }
 getYear() {
  return this._year;
 }
}
class Programmer extends Employee {�
 setSkill(skill) {
  this._skill = skill;
 }
 getSkill() {
  return this._skill;
 }
}
class Designer extends Employee {
setAge(age) {
this._age = age;
}
getAge() {
return this._age;
}
}