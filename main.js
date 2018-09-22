console.log("REACT:", React);
console.log("REACTDOM:", ReactDOM);

var myReactElement = React.createElement('h1',{style: {color: 'blue'}},"I am vegan");

var actualDOMNode = document.getElementById('app')
console.log(myReactElement)

ReactDOM.render(myReactElement, actualDOMNode)
