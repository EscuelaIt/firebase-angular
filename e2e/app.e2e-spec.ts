import { ProyectFirebasePage } from './app.po';

describe('proyect-firebase App', function() {
  let page: ProyectFirebasePage;

  beforeEach(() => {
    page = new ProyectFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
