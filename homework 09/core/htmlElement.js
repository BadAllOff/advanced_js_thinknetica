"use strict";

class HtmlElement {
  constructor() {
    this._target;
    this._template;
    this._variables;
    this._styles;
  }

  _render() {
    const accumStyles =[];

    if (this._template == undefined) return false;

    for (let [key, value] of Object.entries(this._variables)) {
      if (!(typeof value === "function" || typeof value === "string")) {
        throw new Error("Variable type is not supported");
      }

      this.template = this._template.replace(
        new RegExp(`{{${key}}}`, "g"), value
      );
    }

    this._target.innerHTML = this._template;

    if (this._styles !== undefined) {
      for (const [key, value] of Object.entries(this._styles)) {
        accumStyles.push(`${key}: ${value}`);
      }
    }
    this._target.firstElementChild.style.cssText = accumStyles.join('; ');
  }

  _unrender() {
    this._target.innerHTML = '';
  }
  //задает шаблон в виде строки, механизм замены можно использовать любой,
  set template(str) {
    this._template = str;
  }

  set variables(variables) {
    this._variables = variables;
  }

  set target(domElement) {
    if (!(domElement instanceof Element)) {
      throw new Error("Target should be a DOM element");
    }
    this._target = domElement;
  }

  set styles(styles) {
    this._styles = styles;
  }

  render() {
    this._render();
  }

  unrender() {
    this._unrender();
  }
}
