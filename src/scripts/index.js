import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import CustomElement from './elements';
import swRegister from './utils/sw-register';
import '../styles/main.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const loadingElement = document.getElementsByClassName('loading__wrapper')[0];
const drawerElement = document.querySelector('#drawer');
const main = document.querySelector('main');

const app = new App({
  button: hamburgerButtonElement,
  drawer: drawerElement,
  content: main,
  loading: loadingElement,
});

CustomElement.init();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
