import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('EMPLOYEE PORTAL APP', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('EMPLOYEE PORTAL');
  });

  it('should display Home as active Menu', () => {
    page.navigateTo();
    expect(page.getactiveMenu()).toEqual('HOME');
  });
  it('should display the first tile name', () => {
    page.navigateTo();
    expect(page.getSections('home-sections')).toEqual('ADD EMPLOYEE');
  });
  it('should display the second tile name', () => {
    page.navigateTo();
    expect(page.getSections('manage-section')).toEqual('MANAGE EMPLOYEE');
  });
  it('should display the third tile name', () => {
    page.navigateTo();
    expect(page.getSections('request-section')).toEqual('REQUEST ACCESS');
  });
  it('should display the fourth tile name', () => {
    page.navigateTo();
    expect(page.getSections('track-section')).toEqual('TRACK REQUESTS');
  });
  it('should validate the footer text', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual('©2019 MyComPany Limited. All Rights Reserved.');
  });
  it('should validate navigation link on the Logo', () => {
    page.navigateTo();
    expect(page.getLogoNavigationLink()).toEqual('home');
  });
  it('should validate all the navigation link has navigation active', () => {
    page.navigateTo();
    expect(page.checkNavigationActive()).toEqual('active');
  });

  it('should validate 3 dot menu lower resolution', () => {
    var width = 500;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);
    page.navigateTo();
    expect(page.checkToggleMenu()).toEqual(true);
  });

});
