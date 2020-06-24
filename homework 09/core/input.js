"use strict";

class Input extends HtmlElement {
  constructor() {
    super();
  }

  onInput(fn) {
    this._target.firstElementChild.addEventListener("input", fn);
  }

  onFocus(fn) {
    this._target.firstElementChild.addEventListener("focus", fn);
  }
}
