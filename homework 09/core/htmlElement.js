"use strict";

class CustomHtmlElement {
  constructor() {
    this._target;
    this.template;
    this.variables;
  }

  _render() {}

  _unrender() {}
//задает шаблон в виде строки, механизм замены можно использовать любой,
  set template(str) {
    this.template = str;
  }

  set variables(variables) {

  }

  set target(target) {

  }

  set styles(styles) {

  }

  render() {
    this._render();
  }

  unrender() {
    this._unrender();
  }
}
