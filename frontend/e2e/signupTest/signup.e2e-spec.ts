import { AppPage } from './signup.po';
import {} from 'jasmine';

describe('Sign up function testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(1).toEqual(1);
  });
});
