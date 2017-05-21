import { KendoDropdownPage } from './app.po';

describe('kendo-dropdown App', () => {
  let page: KendoDropdownPage;

  beforeEach(() => {
    page = new KendoDropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
