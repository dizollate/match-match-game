import './timer.scss';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  private isActive = true;

  private isClear = true;

  constructor(public counter = 999) {
    super('div', ['timer']);
    this.element.innerHTML = '0s';
    this.element.addEventListener('click', () => {
      this.isActive = false;
    });
  }

  stop() {
    this.element.innerHTML = '0s';
  }

  reset() {
    this.element.innerHTML = '0s';
  }

  show() {
    this.element.classList.add('block');
  }

  hide() {
    this.element.classList.remove('block');
  }

  resetAndStart() {
    this.isClear = false;
  }

  async doTimer() {
    let start: number = 0;
    for (let i = 0; i < this.counter; i++) {
      if (this.isClear) {
        await delay(1000);
        this.element.innerText = `${start}s`;
        start += 1;
      } else if (!this.isClear) {
        start = 0;
        await delay(3200);
        this.element.innerText = `${start}s`;
        this.isClear = true;
      }
    }
    return start;
  }
}
