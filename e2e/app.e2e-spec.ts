import { MasterDynamicPage } from './app.po';

describe('master-dynamic App', function() {
  let page: MasterDynamicPage;

  beforeEach(() => {
    page = new MasterDynamicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('md works!');
  });
});
