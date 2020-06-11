"use strict";
/**
 * "Student" class
 * @param {string} fullName
 * @param {boolean} isPresent
 * @constructor
 */


function Student(fullName, isPresent = true) {
  this.fullName = fullName;
  const [lastName, name, patronymic] = fullName.split(" ");

  this.name = name;
  this.lastName = lastName;
  this.patronymic = patronymic;
  this.isPresent = isPresent;

  this.getSurnameWithInitials = function () {
    return `${name} ${lastName[0]}. ${patronymic[0]}.`;
  };

  this.isPresent = function () {
    return this.isPresent;
  };
}
