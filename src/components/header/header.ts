import './header.scss';
import { BaseComponent } from '../base-component';
import { AboutBtn } from './header-buttons/about-btn';
import { StartBtn } from './header-buttons/start-btn';
import gamePage from '../game/game';
import startBtnExp from './header-buttons/start-btn-export';
import { SettingsBtn } from './header-buttons/settings-btn';

export class Header extends BaseComponent {
  private startBtn: StartBtn;

  private aboutBtn: AboutBtn;

  private settingsBtn: SettingsBtn;

  constructor() {
    super('header', ['header']);
    this.aboutBtn = new AboutBtn();
    this.settingsBtn = new SettingsBtn();
    this.startBtn = startBtnExp;
    this.element.appendChild(this.aboutBtn.element);
    this.element.appendChild(this.settingsBtn.element);
    this.element.appendChild(this.startBtn.element);
    const buttons = this.element.querySelectorAll('button');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => gamePage.headerBtnClick(btn));
    });
  }
}
