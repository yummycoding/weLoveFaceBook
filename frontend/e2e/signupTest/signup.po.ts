import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://localhost:3000');
  }

  getTitle() {
    
  }
}
