import '../settings.scss';
import { BaseComponent } from '../../base-component';

export class GameCardSelect extends BaseComponent {
  constructor() {
    super('select', ['gamecard-select']);
    this.createOptions();
    this.element.id = 'select-toys';
  }

  createOptions() {
    const animal = document.createElement('option');
    animal.innerText = 'animal';
    animal.id = 'animal';
    animal.setAttribute('selected', 'selected');
    const toys = document.createElement('option');
    toys.innerText = 'toys';
    toys.id = 'toys';
    this.element.appendChild(animal);
    this.element.appendChild(toys);
  }
}

const gameCardSelect = new GameCardSelect();

export default gameCardSelect;
