const sEl = new Div();
sEl.template = `<div>{{output}}</div>`;
sEl.variables = {
  output: "Some text",
  variable2: "Another text",
};
sEl.target = document.getElementById("container");

sEl.styles = {
  color: "red",
  "font-size": "15",
};

console.log(sEl._styles);

sEl.render();

sEl.onClick = () => {
	console.log('test')
}




// setTimeout(() => {
//   sEl.unrender();
// }, 5000);





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
