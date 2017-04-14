import { PwaPage } from './app.po';

describe('pwa App', () => {
  let page: PwaPage;

  beforeEach(() => {
    page = new PwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
