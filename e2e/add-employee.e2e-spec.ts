import { browser, by, element } from 'protractor';
import { AddEmployeePage } from './add-employee.po';

describe('EMPLOYEE PORTAL APP - ADD NEW EMPLOYEE', () => {
  let page: AddEmployeePage;

  beforeEach(() => {
    page = new AddEmployeePage();
    browser.driver.manage().window().maximize();

  });

  it('should test Add New Employee Page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ADD NEW EMPLOYEE');
  });

  it('should test check Auto complete property of the form', () => {
    page.navigateTo();
    expect(page.checkFormAutoComplete()).toEqual('off');
  });

  it('should test Form field - First Name', () => {
    page.navigateTo();
    expect(page.getFirstNameInput()).toEqual('');
  });

  it('should test Submit button active or not', () => {
    page.navigateTo();
    expect(page.checkButtonActive()).toEqual(null);
  });

});
