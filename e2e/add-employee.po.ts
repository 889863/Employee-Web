import { browser, by, element } from 'protractor';
export class AddEmployeePage {
    navigateTo(){
        return browser.get('/add-employee');
    }

    getParagraphText() {
        return element(by.css('.employee-container h2')).getText();
    }

    checkFormAutoComplete() {
        return element(by.css('.employee-container form')).getAttribute('autocomplete');
    }

    getFirstNameInput() {
        return element(by.css('.employee-container form input')).getText();
    }

    checkButtonActive() {
        return element(by.css('.employee-container form button')).getAttribute('disabled');
    }


}