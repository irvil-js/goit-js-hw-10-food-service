import './styles.css';
import './js/theme.js';
import menuElement from './menu.json';
import menuTemplate from './templates/menu-template.hbs';


let menu = document.querySelector('.js-menu');

function markUpMenu(array) {
    const markup = menuTemplate(array);
    menu.insertAdjacentHTML('beforeend', markup);
}

markUpMenu(menuElement);