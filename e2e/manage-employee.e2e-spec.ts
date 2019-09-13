import { browser, by, element } from 'protractor';
import { ManageEmployeePage } from './manage-employee.po';

describe('EMPLOYEE PORTAL APP - ADD NEW EMPLOYEE', () => {
  let page: ManageEmployeePage;

  beforeEach(() => {
    page = new ManageEmployeePage();
    browser.driver.manage().window().maximize();
  });

  it('should test Manage Employee Page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MANAGE EMPLOYEE');
  });

  it('should test the active menu for the manage employee page', () => {
    page.navigateTo();
    expect(page.getactiveMenu()).toEqual('MANAGE');
  });

  it('should test Submit button active or not', () => {
    page.navigateTo();
    expect(page.checkButtonActive()).toEqual(null);
  });

  it('should test search button click without selecting option', () => {
    page.navigateTo();
    page.getSearchButton().click();
    expect(page.selectBoxError()).toContain('ng-invalid');
  });

  it('should test search button click with option', () => {
    page.navigateTo();
    page.getSearchOption().sendKeys('Email');
    page.getSearchInput().sendKeys('80001');
    page.getSearchButton().click();
    expect(page.selectBoxError()).toContain('ng-valid');
  });

});
