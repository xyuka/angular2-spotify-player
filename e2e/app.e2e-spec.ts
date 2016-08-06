import { Angular2SpotifyPlayerPage } from './app.po';

describe('angular2-spotify-player App', function() {
  let page: Angular2SpotifyPlayerPage;

  beforeEach(() => {
    page = new Angular2SpotifyPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
