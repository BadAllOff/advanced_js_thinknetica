'use strict';
/**
 * innerHTML и outerHTML не использовать - это слишком просто
 * 
 * 1. Создать функцию, которая будет принимать HTML элемент и объект.
 * Требуется обойти все дочерние ноды HTML элемента и у тех элементов, 
 * у которых есть атрибут data-field выставить textContent 
 * из соответствующего свойства объекта.
 * В случае, если в объекте нет нужного свойства - выбросить ошибку,
 * если в объекте есть свойство, которое не используется в HTML - игнорировать
 * Пример:
 * HTML  
 * 
 * <div id=”item1”>
 *   <h3 data-field=”title”>Some title</h3>
 *   <p data-field=”description”></p>
 * </div>
 * 
 * JS
 * 
 * parseTemplate(
 *   document.getElementById(‘item1’),
 *   {
 *     title: ‘Hello world’,
 *     description: ‘The first program’,
 *   }
 * );
 * 
 *  HTML должен измениться на  
 * 
 * <div id=”item1”>
 *   <h3 data-field=”title”>Hello world</h3>
 *   <p data-field=”description”>The first programm</p>
 * </div>
 * 
 * @param {Node} node
 * @param deep уровень вложенности
 * @return {VoidFunction}
 */

function parseTemplate(el, obj) {
  if (!el)
    throw new Error('Please provide element');

  if (!obj)
    throw new Error('Please provide an object with data');

  let keys = Object.keys(obj);

  for (let i = 0; i < el.children.length; i++) {
    let currElement = el.children[i];
    let dataAttributes = currElement.dataset;
    currElement.textContent = obj[dataAttributes.field]
  }
}