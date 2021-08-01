import { BaseComponent } from '../../base-component';
import '../header.scss';

export class AboutBtn extends BaseComponent {
  constructor() {
    super('button', ['about-btn']);
    this.element.innerText = 'About';
  }
}
