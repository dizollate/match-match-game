import '../settings.scss';
import { BaseComponent } from '../../base-component';

export class DifficulSelect extends BaseComponent {
  constructor() {
    super('select', ['difficult-select']);
    this.createOptions();
    this.element.id = 'select-toys';
    const sel = document.getElementById('select-toys');
    const options = this.element.querySelectorAll('option');
    console.log(options);
    // this.element.addEventListener('change', DifficulSelect.changeLister);
  }

  // static changeLister(e: any) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (e.target.value === '1') {
  //     appExport.start('./images.json');
  //   } else {
  //     appExport.start('./images3x4.json');
  //   }
  // }

  createOptions() {
    const FOUR_FIVE = document.createElement('option');
    FOUR_FIVE.innerText = '4x5';
    FOUR_FIVE.classList.add();
    FOUR_FIVE.setAttribute('value', '1');
    const FIVE_SIX = document.createElement('option');
    FIVE_SIX.innerText = '5x6';
    FIVE_SIX.setAttribute('value', '2');
    this.element.appendChild(FOUR_FIVE);
    this.element.appendChild(FIVE_SIX);
  }
}

const difficultSelect = new DifficulSelect();

export default difficultSelect;
