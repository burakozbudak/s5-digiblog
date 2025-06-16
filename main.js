import { initializeMenu } from './components/MenuBuilder.js';
import { initializeNews } from './components/NewsBuilder.js';

document.addEventListener('DOMContentLoaded', function () {
  initializeMenu();
  initializeNews();
});
