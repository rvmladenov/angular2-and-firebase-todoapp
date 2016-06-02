import { Angular2AndFirebaseTodoappPage } from './app.po';

describe('angular2-and-firebase-todoapp App', function() {
  let page: Angular2AndFirebaseTodoappPage;

  beforeEach(() => {
    page = new Angular2AndFirebaseTodoappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-and-firebase-todoapp works!');
  });
});
