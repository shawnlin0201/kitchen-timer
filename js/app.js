import { renderView } from './modules/renderer.js';
import { component } from './views/initialPage.js';
import { eventBus } from './modules/eventBus.js';

document.addEventListener('DOMContentLoaded', () => {
  renderView('#app-container', component);
});

eventBus.on('startGame', () => {
  renderView('#app-container', gamePage);
});