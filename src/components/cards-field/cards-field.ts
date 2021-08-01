import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { ResetBtn } from '../reset-btn/reset-btn';
import { ModalCover } from '../modal-cover/modal-cover';
import resetPopupExport from '../reset-btn/reset-popup/reset-popup';
import timerExport from '../timer/timer-export';

const SHOW_TIME = 5;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  resetButton: ResetBtn | null;

  modalCover: ModalCover | null;

  constructor() {
    super('div', ['cards-field']);
    this.resetButton = null;
    this.modalCover = null;
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  checkCards(cards: Card[]) {
    this.cards = cards;
    const finishGame = this.cards.map((elem) => elem.isFlipped);
    const lastClick = finishGame.filter((elem) => elem === false);
    if (lastClick.length === 20) {
      this.resetButton!.getElementClass().classList.add('block');
      this.modalCover!.getElementCover().classList.add('block');
      resetPopupExport.show();
      timerExport.stop();
    } else {
      this.resetButton!.getElementClass().classList.remove('block');
      this.modalCover!.getElementCover().classList.remove('block');
      resetPopupExport.hide();
    }
  }

  catchButton(resetButton: ResetBtn) {
    this.resetButton = resetButton;
  }

  catchCover(modalCover: ModalCover) {
    this.modalCover = modalCover;
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, 0);
  }

  addCardsNew(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => card.flipToFront());
    setTimeout(() => {
      timerExport.doTimer();
    }, 0);
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, 5000);
  }
}
