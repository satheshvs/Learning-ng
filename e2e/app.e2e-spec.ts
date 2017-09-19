import { InputPage } from './app.po';

describe('input App', () => {
  let page: InputPage;

  beforeEach(() => {
    page = new InputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
