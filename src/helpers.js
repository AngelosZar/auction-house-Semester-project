export function getTheme() {
  const html = document.documentElement;
  const headerLogo = document.querySelector('#header-logo');

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
    headerLogo.src = 'media/logo/grayscale-transparent.png';
  } else {
    html.classList.add('light');
    headerLogo.src = 'media/logo/color-transparent.png';
  }
}

export function watchThemeChanges() {
  const html = document.documentElement;
  const headerLogo = document.querySelector('#header-logo');
  //
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      html.classList.remove('light');
      html.classList.add('dark');
      headerLogo.src = 'media/logo/grayscale-transparent.png';
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      headerLogo.src = 'media/logo/color-transparent.png';
    }
  });
}
// Create a function and a button to toggle the theme -- if time
// maybe create aseperate functio for the toggle header logo
