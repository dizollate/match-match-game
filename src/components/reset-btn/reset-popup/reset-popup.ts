import './reset-popup.scss';
import { BaseComponent } from '../../base-component';
import { ResetBtn } from '../reset-btn';

export class ResetPopup extends BaseComponent {
  private resetBtn: ResetBtn;

  constructor() {
    super('div', ['reset-popup']);
    this.resetBtn = new ResetBtn();
    const TEXT_POPUP = document.createElement('div');
    TEXT_POPUP.classList.add('text__popup');
    TEXT_POPUP.innerHTML = 'Congratulations!';
    this.element.appendChild(TEXT_POPUP);
    this.element.appendChild(this.resetBtn.element);
  }

  show() {
    this.element.classList.add('block');
  }

  hide() {
    this.element.classList.remove('block');
  }

  getElementBtn() {
    return this.resetBtn.getElement();
  }
}

const resetPopupExport = new ResetPopup();

export default resetPopupExport;
