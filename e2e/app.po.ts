import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getactiveMenu() {
    return element(by.css('.nav-container nav ul li.active')).getText();
  }
  getSections(section) {
    return element(by.css('.'+section+ ' h3')).getText();
  }
  getFooterText() {
    return element(by.css('footer p')).getText();
  }
  getLogoNavigationLink() {
    return element(by.css('.nav-container .logo')).getAttribute('ng-reflect-router-link');
  }
  checkNavigationActive() {
    return element(by.css('.nav-container nav ul li')).getAttribute('ng-reflect-router-link-active');
  }
  checkToggleMenu() {
    return element(by.css('.menu-icon')).isPresent();
  }
}
