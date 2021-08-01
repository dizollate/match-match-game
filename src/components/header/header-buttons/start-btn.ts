import '../header.scss';
import { BaseComponent } from '../../base-component';

export class StartBtn extends BaseComponent {
  constructor() {
    super('button', ['start-btn']);
    this.element.innerText = 'Start game';
  }
}
