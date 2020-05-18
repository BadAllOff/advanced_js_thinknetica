"use strict";
/**
* 2. Написать алгоритм кодирования идентификатора (задача, обратная тому, что показано в уроке).
*   Шестнадцатиричный код 
AAAAAAAABBCDDDDDD
fd95ab53aa854bdff
*   А. метка времени (timestamp в секундах)
*   B. кластер
*   C. тип
*   D. идентификатор пользователя
*  Все входные данные - целые десятичные числа (значения можно “зашить” прямо в код решения). 
*/

function identifierDecodingAlgorithm (id) {

  const a = id.substr(0,8); //4254444371
  const timestamp = parseInt(a, 16);

  const b = id.substr(8,2) //170
  const claster = parseInt(b, 16);
  // Кажеться тут была ошибка 9 вместо 10. 
  // Так как в примере "AAAAAAAABBCDDDDDD" - "С" на 10 позиции
  const c = id.substr(10,1) //8
  const type = parseInt(c, 16);

  const d = id.substr(11) //5553663
  const user = parseInt(d, 16);


  console.log(a,b,c,d);
  console.log(id);
  console.log(timestamp, claster, type, user);
  
  // identifierEncodingAlgorithm(timestamp, claster, type, user);
};

function identifierEncodingAlgorithm (timestamp, claster, type, user) {

  const a = timestamp.toString(16);
  //костыль. Можно коммент о том как лучше?
  const b = (claster >= 1 && claster <= 15) ? '0'+claster : claster.toString(16);
  const c = type.toString(16);
  const d = user.toString(16);
  const id = a+b+c+d;

  console.log(a,b,c,d);
  console.log(id);
  console.log(timestamp, claster, type, user);

  identifierDecodingAlgorithm(id);
};