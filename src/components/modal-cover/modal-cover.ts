import './modal-cover.scss';
import { BaseComponent } from '../base-component';

export class ModalCover extends BaseComponent {
  constructor() {
    super('div', ['modal-cover']);
  }

  getElementCover() {
    return this.element;
  }
}
