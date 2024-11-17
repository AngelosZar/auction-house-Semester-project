export default async function router(pathname) {
  const main = document.querySelector('main');

  switch (pathname) {
    case '/':
      await import('./views/home.js');
      break;
    case '/auth/sign_in/':
      await import('./views/auth/sign_in.js');
      break;
    case '/auth/sign_up/':
      await import('./views/auth/sign_up.js');
      break;
    case '/post/':
  }
}
