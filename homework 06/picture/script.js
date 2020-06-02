'use strict';
/**
* 1. Доработать графический редактор, начатый на занятии
*
*  Увеличить поле
*  Добавить возможность выбора цвета 
*/
const canvasContainer = document.getElementById('canvas');
const paletteContainer = document.getElementById('palette');
let currentColor = 'black';
let previousColor = 'white';
let colorNames = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];

function initDrawing(cellsCount) {
  canvasContainer.classList.remove("hidden");
  paletteContainer.classList.remove("hidden");
  event.target.classList.add("hidden")
  createCanvas(cellsCount);
  createPalette(colorNames, cellsCount);
}

function createCanvas(cellsCount) {
  let table = document.createElement('table');
  table.className = 'canvas';

  for (let i = 0; i < cellsCount; i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < cellsCount; i++) {
      let td = document.createElement('td');
      tr.append(td);
    }
    table.append(tr);
  }

  canvasContainer.append(table);
  table.addEventListener('click', click);
}

function createPalette(colorNames, cellsCount) {
  let table = document.createElement('table');
  table.className = 'palette';
  let currentColorindex = 0;

  for (let i = 0; i < Math.round(colorNames.length / cellsCount); i++) {
    let tr = document.createElement('tr');
    for (let i = 0; i < cellsCount; i++) {
      let td = document.createElement('td');
      if (colorNames[currentColorindex])
        td.style.backgroundColor = colorNames[currentColorindex];
      tr.append(td);
      ++currentColorindex;
    }
    table.append(tr);
  }

  paletteContainer.append(table);
  table.addEventListener('click', chooseColor);
}

function chooseColor(event) {
  previousColor = currentColor;
  currentColor = event.target.style.backgroundColor;
}

function click(event) {
  if (event.target.tagName !== 'TD')
    return;
  if (event.shiftKey)
    event.target.style.backgroundColor = 'transparent';
  else if (event.ctrlKey)
    event.target.style.backgroundColor = previousColor;
  else
    event.target.style.backgroundColor = currentColor;
}
