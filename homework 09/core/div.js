"use strict";

class Div extends HtmlElement {
  constructor() {
    super();
  }

  set onClick(fn) {
    this._target.firstElementChild.addEventListener('click', fn);
  }
}
