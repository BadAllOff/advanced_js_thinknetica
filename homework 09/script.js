// Text element
const div = new Div();
div.template = `<div>{{output}}</div>`;
div.variables = {
  output: "Some text",
  variable2: "Another text",
};
div.target = document.getElementById("textContainer");

div.styles = {
  color: "red",
  "font-size": "30px",
};

console.log(div);

div.render();

div.styles = {
  color: "blue",
  "font-size": "35px",
};

div.onClick = () => {
  console.log("test");
};

setTimeout(() => {
  div.unrender();
}, 10000);

// Input element
const input = new Input();
input.template = `<input type="text" name="{{name}}" placeholder="{{placeholder}}">`;
input.variables = {
  placeholder: "write here",
  name: "inputText",
};

input.target = document.getElementById("inputContainer");

input.render();

input.styles = {
  color: "red",
  "font-size": "15px",
};

input.styles = {
  color: "blue",
  "font-size": "10px",
};

input.onInput(() => {
  console.log("input");
});

input.onFocus(() => {
  console.log("focus");
});

// const someElement = new Div()

// someElement.template = `<div>{{output}}</div>`
// someElement.variables = {
// 	output: 'Some text'
// }
// // Цвет текста синий

// someElement.styles = {
// 	color: 'red'
// }
// someElement.render()
// someElement.onClick = () => {
// 	console.log('test')
// }
// // Цвет текста синий
// someElement.styles = {
// 	color: blue
// }
// someElement.unrender()
