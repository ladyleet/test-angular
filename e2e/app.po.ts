export class TestAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-angular-app h1')).getText();
  }
}
