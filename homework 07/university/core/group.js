"use strict";
/**
 * "Group" class
 * @param {number} groupNumber
 * @param {Array<Objects>} studentsList
 * @param {void} addStudentToGroup
 * @param {void} removeStudentFromGroup
 * @param {Array<Objects>} getAbsentStudentsList
 * @constructor
 */
function Group(groupNumber) {
  this.groupNumber = groupNumber;
  this.studentsList = [];

  this.getAbsentStudentsList = function () {
    return this.studentsList.filter((s) => !s.present);
  };

  this.addStudentToGroup = function (student) {
    this.studentsList.push(student);
  };

  this.removeStudentFromGroup = function (student) {
    this.studentsList.pop(student);
  };
}
