import { browser, by, element } from 'protractor';
export class ManageEmployeePage {
    navigateTo(){
        return browser.get('/manage-employee');
    }

    getParagraphText() {
        return element(by.css('.manage-employee-container h2')).getText();
    }
    getactiveMenu() {
        return element(by.css('.nav-container nav ul li.active')).getText();
      }

    checkFormAutoComplete() {
        return element(by.css('.manage-employee-container form')).getAttribute('autocomplete');
    }
    checkButtonActive() {
        return element(by.css('.manage-employee-container form button')).getAttribute('disabled');
    }
    getSearchButton() {
        return element(by.css('.manage-employee-container form button'));
    }
    getSearchOption() {
        return element(by.css('.manage-employee-container form mat-select'));
    }
    getSearchInput() {
        return element(by.css('.manage-employee-container form input'));
    }

    selectBoxError() {
        return element(by.css('.manage-employee-container form mat-select')).getAttribute('class');
    }


}