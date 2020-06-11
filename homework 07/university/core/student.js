"use strict";
/**
 * "Student" class
 * @param {string} fullName
 * @param {boolean} isPresent
 * @constructor
 */

function Student(fullName, isPresent = true) {
  const [lastName, name, patronymic] = fullName.split(" ");
  this.fullName = fullName;
  this.name = name;
  this.lastName = lastName;
  this.patronymic = patronymic;
  this.present = isPresent;

  this.getSurnameWithInitials = function () {
    return `${this.name} ${this.lastName[0]}. ${this.patronymic[0]}.`;
  };

  this.isPresent = function () {
    return this.present;
  };
}
