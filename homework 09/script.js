const someElement = new Div()

someElement.template = `<div>{{output}}</div>`
someElement.variables = {
	output: 'Some text'
}
// Цвет текста синий

someElement.styles = {
	color: 'red'
}
someElement.render()
someElement.onClick = () => {
	console.log('test')
}
// Цвет текста синий
someElement.styles = {
	color: blue
}
someElement.unrender()