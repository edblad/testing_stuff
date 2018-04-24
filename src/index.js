// Default import (import installed package like this)
import marked from 'marked';
// Named import (import variables from other js-file)
import { input, output } from './elements';
// Import all in elements.js
import * as elements from './elements'; // 'As' döper om (prova var det funkar)
// Import css like this
import './scss/main.scss';

// När man importerat allt från en fil
elements.input.addEventListener('keyup', function listenForKeyUp(){
    output.innerHTML = marked(this.value);
});

// När man importerat vissa variabler från en fil
input.addEventListener('keyup', function listenForKeyUp(){
    output.innerHTML = marked(this.value);
});

const converted = marked('# Hello h1 \n ## Hello h2');
//document.body.innerHTML= converted;
//console.log(converted);