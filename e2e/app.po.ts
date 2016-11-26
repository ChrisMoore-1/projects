import { browser, element, by } from 'protractor';

export class MasterDynamicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('md-root h1')).getText();
  }
}
