export default class App {
  constructor() {
    const appMainElement = document.querySelector('.app');
    const title = document.createElement('div');
    title.classList.add('app__title');
    title.textContent = 'thirdmadman';
    appMainElement.append(title);
  }
}
