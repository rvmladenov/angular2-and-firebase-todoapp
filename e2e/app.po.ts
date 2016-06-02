export class Angular2AndFirebaseTodoappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-and-firebase-todoapp-app h1')).getText();
  }
}
