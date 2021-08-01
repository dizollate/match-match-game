import { BaseComponent } from '../base-component';
import './about-game.scss';

export class AboutGame extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = 'hello';
  }

  show() {
    this.element.classList.add('block');
  }

  hide() {
    this.element.classList.remove('block');
  }
}

const aboutPage = new AboutGame();

export default aboutPage;
