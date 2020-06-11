"use strict";

const student1 = new Student("Sechenov Ivan Mikhaylovich", false);
const student2 = new Student("Mendeleev Dmitri Ivanovich");
const group = new Group(23);

group.addStudentToGroup(student1);
group.addStudentToGroup(student2);

group.studentsList;

group.getAbsentStudentsList();
