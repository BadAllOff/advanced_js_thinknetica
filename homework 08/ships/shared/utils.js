'use strict';

// Возможно не нужная оптимизация.)

/**
 * @param {boolean} droped
 */
function isAnchorDroped() {
  return this._isAnchorDroped;
};

/**
 * @param {boolean} droped
 */
function dropAnchor() {
  if (this.speed !== 0) 
    throw new Error("Speed must be 0");

  return this._isAnchorDroped = true;
};

/**
 * @param {boolean} droped
 */
function riseAnchor() {
  if (this._isAnchorDroped) return this._isAnchorDroped = false;
};