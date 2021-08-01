import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { ModalCover } from '../modal-cover/modal-cover';
import aboutPage from '../about-game/about-game';
import resetPopupExport from '../reset-btn/reset-popup/reset-popup';
import { ResetPopup } from '../reset-btn/reset-popup/reset-popup';
import startBtnExp from '../header/header-buttons/start-btn-export';
import timerExport from '../timer/timer-export';
import settingsPage from '../settings/settings';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private resetPopup: ResetPopup;

  private isAnimation = false;

  private modalCover: ModalCover;

  constructor() {
    super('div', ['app-field']);
    this.element.classList.add('block');
    this.modalCover = new ModalCover();
    this.resetPopup = resetPopupExport;
    this.cardsField = new CardsField();
    this.element.appendChild(this.resetPopup.element);
    this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.modalCover.element);
  }

  headerBtnClick(btn: HTMLButtonElement) {
    if (btn.className === 'start-btn') {
      window.location.hash = 'start-game';
      aboutPage.hide();
      timerExport.resetAndStart();
      settingsPage.hide();
      timerExport.show();
      this.element.classList.add('block');
    } else if (btn.className === 'about-btn') {
      window.location.hash = 'about';
      aboutPage.show();
      settingsPage.hide();
      timerExport.hide();
      timerExport.reset();
      this.element.classList.remove('block');
    } else if (btn.className === 'settings-btn') {
      window.location.hash = 'settings';
      aboutPage.hide();
      timerExport.reset();
      timerExport.hide();
      settingsPage.show();
      this.element.classList.remove('block');
    }
  }

  show() {
    this.element.classList.add('block');
  }

  hide() {
    this.element.classList.remove('block');
  }

  newGame(images: string[]) {
    this.cardsField.catchButton(this.resetPopup.getElementBtn());
    this.cardsField.catchCover(this.modalCover);
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach((card) => {
      card.element.addEventListener('click', () => { this.cardHandler(card); this.cardsField.checkCards(cards); });
    });
    this.cardsField.addCards(cards);
    startBtnExp.element.addEventListener('click', () => {
      console.log('geeee');
      this.cardsField.addCardsNew(cards);
    });
    this.resetPopup.getElementBtn().element.addEventListener('click', () => {
      this.newGame(images);
      this.resetPopup.getElementBtn().element.classList.remove('block');
      timerExport.reset();
      this.modalCover.element.classList.remove('block');
      this.resetPopup.element.classList.remove('block');
    });
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();
    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard!.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard!.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}

const gamePage = new Game();

export default gamePage;
