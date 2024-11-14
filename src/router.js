export default async function router(pathname) {
  const main = document.querySelector('main');

  switch (pathname) {
    case '/':
      await import('./views/home.js');
      break;
  }
}
