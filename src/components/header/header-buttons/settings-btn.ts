import { BaseComponent } from '../../base-component';
import '../header.scss';

export class SettingsBtn extends BaseComponent {
  constructor() {
    super('button', ['settings-btn']);
    this.element.innerText = 'Settings';
  }
}
