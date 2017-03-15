import { MeanBookTrackerPage } from './app.po';

describe('mean-book-tracker App', () => {
  let page: MeanBookTrackerPage;

  beforeEach(() => {
    page = new MeanBookTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
