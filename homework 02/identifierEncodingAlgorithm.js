/**
* 2. Написать алгоритм кодирования идентификатора (задача, обратная тому, что показано в уроке).
*   Шестнадцатиричный код 
AAAAAAAABBCDDDDDD
1fd95ab53aa854bdff
*   А. метка времени (timestamp в секундах)
*   B. кластер
*   C. тип
*   D. идентификатор пользователя
*  Все входные данные - целые десятичные числа (значения можно “зашить” прямо в код решения). 
*/

function identifierEncodingAlgorithm () {

  const id = '0fd95ab53a854bdff';

  const a = id.substr(0,8); //534338229
  const timestamp = parseInt(a, 16);

  const b = id.substr(8,2) //15709027839
  const claster = parseInt(b, 16);

  const c = id.substr(9,1) //10
  const type = parseInt(c, 16);

  const d = id.substr(10) //139771391
  const user = parseInt(d, 16);


  console.log(a,b,c,d);
  console.log(id);
  console.log(timestamp, claster, type, user);
};

function identifierDecodingAlgorithm (timestamp, claster, type, user) {

  const a = timestamp.toString(16);
  const b = claster.toString(16);
  const c = type.toString(16);
  const d = user.toString(16);
  const id = a+b+c+d;

  console.log(a,b,c,d);
  console.log(id);
  console.log(timestamp, claster, type, user);
};