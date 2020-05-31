'use strict';
/**
 * 1. Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
 * Реализовать 3 функции, выполняющие это разными способами 
 */

document.addEventListener("DOMContentLoaded", function (event) {

  /**
   * Первый - очень знакомый метод. ))
   * Рекурсивная функция, рисующая структуру DOM дерева в консоли
   *
   * @param {Node} node
   * @param deep уровень вложенности
   * @return {VoidFunction}
   */

  function printNode(node, deep = 0) {
    console.log('='.repeat(deep) + '>', node.nodeType, node.nodeName);
    for (let item = node.firstChild; item; item = item.nextSibling)
      printNode(item, deep + 1);
  }

  printNode(document.documentElement);
  console.log('-----------------------------------------------------------------------------');


  /**
   * Второй метод
   * Рекурсивная функция, рисующая структуру DOM дерева в консоли
   *
   * @param {Node} node
   * @param deep уровень вложенности
   * @return {VoidFunction}
   */

  function printNode2(node, deep = 0) {
    console.log('='.repeat(deep) + '>', node.nodeType, node.nodeName);

    if (node.firstChild) {
      printNode2(node.firstChild, deep + 1)
    }
    if (node.nextSibling) {
      printNode2(node.nextSibling, deep)
    }
  }

  printNode2(document.documentElement);
  console.log('-----------------------------------------------------------------------------');

  /**
   * Третий метод (понравилась реализация у коллеги)
   * Рекурсивная функция, рисующая структуру DOM дерева в консоли
   *
   * @param {Node} node
   * @param deep уровень вложенности
   * @return {VoidFunction}
   */

  function printNode3(node, deep = 0) {
    if (!node) {
      return;
    }

    if (node.children.length === 0) {
      return;
    } else {
      [...node.children].forEach((el) => {
        console.log('-'.repeat(deep) + '>', el.nodeType, el.tagName);
        printNode3(el, deep + 1);
      });
    }
  }

  printNode3(document);

});