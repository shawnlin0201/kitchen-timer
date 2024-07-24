import { renderView } from './modules/renderer.js';
import { component } from './views/initialPage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderView('#app-container', component);
});

// handle emit event