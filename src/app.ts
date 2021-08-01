import { Game } from './components/game/game';
import { AboutGame } from './components/about-game/about-game';
import { ImageCategory } from './models/img-category-model';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import gamePage from './components/game/game';
import aboutPage from './components/about-game/about-game';
import { Timer } from './components/timer/timer';
import timerExport from './components/timer/timer-export';
import settingsPage from './components/settings/settings';
import { Settings } from './components/settings/settings';

export class App {
  private readonly aboutGame: AboutGame;

  private readonly game: Game;

  private timer: Timer;

  private settings: Settings;

  private readonly header: Header;

  private readonly footer: Footer;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.aboutGame = aboutPage;
    this.game = gamePage;
    this.footer = new Footer();
    this.timer = timerExport;
    this.settings = settingsPage;
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(timerExport.element);
    this.rootElement.appendChild(this.game.element);
    this.rootElement.appendChild(this.settings.element);
    this.rootElement.appendChild(this.aboutGame.element);
    this.rootElement.appendChild(this.footer.element);
  }

  async start(url: string) {
    App.enableRoutChange();
    window.location.hash = 'about';
    const res = await fetch(url);
    const categories: ImageCategory[] = await res.json();
    const cat = categories[0];
    const images = categories[0].images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }

  static enableRoutChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'start-game') {
        window.location.hash = 'start-game';
        aboutPage.hide();
        gamePage.show();
        timerExport.show();
        settingsPage.hide();
      } else if (hash === 'about') {
        window.location.hash = 'about';
        aboutPage.show();
        timerExport.hide();
        gamePage.hide();
        settingsPage.hide();
      } else if (hash === 'settings') {
        window.location.hash = 'settings';
        aboutPage.hide();
        timerExport.hide();
        gamePage.hide();
        settingsPage.show();
      }
    });
  }
}
