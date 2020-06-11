"use strict";

/**
 * 1. Доработать пример, показанный на занятии до соответствия спецификации: Особое внимание обратить на
 *
 *  организацию файлов и папок - по пути и имени файла должно быть понятно что в нем хранится
 *  именование сущностей - по названию сущности должно быть понятно что это
 *
 *  Морской транспорт
 *  При создании корабля требуется задать ему имя, модель и координаты.
 *  Корабль умеет передвигаться по морю (для упрощения - море везде, двигается по прямой).
 *  У корабля имеется якорь. С опущенным якорем корабль передвигаться не может.
 *  Корабль должен иметь следующие свойства:
 *
 *  уникальное название (строковое поле name)
 *  модель (строковое поле model)
 *  координаты в море (поле position содержащий объект вида {x: 12, y: 1} )
 *  общая дистанция, которую корабль проплыл (числовое поле distance)
 *  при всех передвижениях дистанцию следует увеличивать на пройденное расстояние
 *
 *  Корабль должен иметь возможность:
 *
 *  передвигаться на одну координату на север, юг, запад или восток
 *  (направление задается параметром в функции) .
 *  Метод move(direction), который принимает направление (‘n’, ‘w’, ‘s’, ‘e’) и возвращает
 *  удалось ли передвинуться на заданные координаты
 *  передвигаться к заданным координатам . Метод moveTo(x,y), который возвращает удалось ли передвинуться
 *  на заданные координаты. Если корабль стоит на якоре - выдать соответствующую ошибку
 *  опустить якорь . Метод dropAnchor(), который возвращает удалось ли опустить якорь
 *  поднять якорь . Метод riseAnchor(), который возвращает удалось ли поднять якорь
 *  узнать опущен ли якорь . Метод isAnchorDroped(), который возвращает значение типа boolean
 *
 *  Пристань - это место куда может приплыть корабль с целью загрузиться и разгрузиться
 *  Пристань должна иметь следующие свойства:
 *
 *  координаты (поле position содержащий объект вида {x: 12, y: 1} )
 *  список кораблей, которые сейчас у пристани (поле ships содержащее массив кораблей)
 *
 *  Пристань должна иметь возможность :
 *
 *  пришвартовать и отшвартовать корабль
 *  метод moor(ship) пришвартовывает корабль и ставит его на якорь
 *  метод unmoor(ship) отшвартовывает корабль и снимает его с якоря
 *  оба метода возвращают ошибки, если что-то пошло не так
 */

function Ship(name, model, position = { x: 0, y: 0 }) {
  this.name = name;
  this.model = model;
  this.position = position;
  this._isAnchorDroped = false;
  this.speed = 0;
  this.distance = 0;
  const directions = ["n", "s", "e", "w"];

  /**
   * @param ['n', 's', 'e', 'w'] direction
   */
  this.move = function (direction) {
    if (this._isAnchorDroped) throw new Error("You need to rise anchor");
    if (!directions.includes(direction)) throw new Error("Wrong direction");

    let x = this.position.x;
    let y = this.position.y;

    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }

    return this.moveTo({ x, y });
  };

  /**
   * @param {Object} position
   */
  this.moveTo = function (position) {
    if (this._isAnchorDroped) throw new Error("You need to rise anchor");

    this.distance += Math.sqrt((position.x - this.position.x) ** 2 + (position.y - this.position.y) ** 2);
    
    this.position = {
      x: position.x,
      y: position.y,
    };

    return true;
  };

  this.isAnchorDroped = function () {
    console.log("isAnchorDroped", this);
    return this._isAnchorDroped;
  };

  /**
   * @param {boolean} droped
   */
  this.dropAnchor = function () {
    if (this.speed !== 0) throw new Error("Speed must be 0");

    this._isAnchorDroped = true;
  };

  /**
   * @param {boolean} droped
   */
  this.riseAnchor = function () {
    if (this._isAnchorDroped) this._isAnchorDroped = false;
    return true;
  };
}
