import './reset-btn.scss';
import { BaseComponent } from '../base-component';

export class ResetBtn extends BaseComponent {
  constructor() {
    super('button', ['new-game']);
    this.element.innerHTML = 'Ok';
  }

  getElement() {
    return this;
  }

  getElementClass() {
    return this.element;
  }
}
