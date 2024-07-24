import { renderView } from './modules/renderer.js';
import { eventBus } from './modules/eventBus.js';
import { component as initialPage } from './views/initialPage.js';
import { component as gamePage } from './views/gamePage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderView('#app-container', initialPage);
});

eventBus.on('startGame', () => {
  renderView('#app-container', gamePage);
  gamePage.methods.startGame();
});

eventBus.on('returnSelectLevel', () => {
  renderView('#app-container', initialPage);
});