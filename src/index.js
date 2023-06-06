
import './style.css'
import render from './pageload';
const container = document.querySelector('#content')
function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.appendChild(render())

    return element;
}

container.appendChild(component());