import './settings.scss';
import { BaseComponent } from '../base-component';
import gameCardSelect from './settings-selects/game-card-select';
import difficultSelect from './settings-selects/difficult-select';
import { GameCardSelect } from './settings-selects/game-card-select';
import gamePage from '../game/game';

export class Settings extends BaseComponent {
  private gameCardSelect: GameCardSelect;

  constructor() {
    super('div', ['settings']);
    this.gameCardSelect = gameCardSelect;
    const difficultText = document.createElement('span');
    const gameCardText = document.createElement('span');
    difficultText.classList.add('settings-span');
    gameCardText.classList.add('settings-span');
    difficultText.innerText = 'Difficult';
    gameCardText.innerText = 'Choose Game Card';
    this.element.appendChild(difficultText);
    this.element.appendChild(difficultSelect.element);
    this.element.appendChild(gameCardText);
    this.element.appendChild(gameCardSelect.element);
  }

  hide() {
    this.element.classList.remove('block');
  }

  show() {
    this.element.classList.add('block');
  }
}

const settingsPage = new Settings();

export default settingsPage;
