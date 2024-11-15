import router from './router.js';
import { getTheme, watchThemeChanges } from './helpers.js';
window.addEventListener('DOMContentLoaded', () => {
  router(window.location.pathname);
  getTheme();
  watchThemeChanges();
});
