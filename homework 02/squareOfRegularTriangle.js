"use strict";
/*
* 1. Написать код расчета площади правильного треугольника
* У пользователя запрашивается длина стороны. Посчитать и вывести площадь треугольника.
* Формула для вычисления площади треугольника: www.webmath.ru
*/


function calcualteAreaOfRegularTriangle () {

  let side = Number(prompt('Пожалуйста введите длину стороны правильного треугольника'));
  let area;

  if (side > 0) {

    area = (side**2 * Math.sqrt(3)) / 4;
    alert(area);
  }else{
    alert("Такого треугольника не существует.");
  }
};