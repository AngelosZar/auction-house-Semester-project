export function getTheme() {
  const html = document.documentElement;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
  } else {
    html.classList.add('light');
  }
}

export function watchThemeChanges() {
  const html = document.documentElement;
  //
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  });
}
// Create a function and a button to toggle the theme -- if time
