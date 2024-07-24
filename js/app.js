import { renderView } from './modules/renderer.js';
import { eventBus } from './modules/eventBus.js';
import { component as initialPage } from './views/initialPage.js';
import { component as gamePage } from './views/gamePage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderView('#app-container', initialPage);
  eventBus.setState('page', 'initialPage');
});

document.addEventListener('keydown', (e) => {
  const page = eventBus.getState('page');
  if (e.code === 'Space' && page === 'gamePage') {
    gamePage.methods.calcTimer();
  }
});

eventBus.on('startGame', () => {
  renderView('#app-container', gamePage);
  eventBus.setState('page', 'gamePage');
  gamePage.methods.startGame();
});

eventBus.on('returnSelectLevel', () => {
  renderView('#app-container', initialPage);
  eventBus.setState('page', 'initialPage');
});