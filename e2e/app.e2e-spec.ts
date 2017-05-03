import { TestAngularBasicAnimationsPage } from './app.po';

describe('test-angular-basic-animations App', () => {
    let page: TestAngularBasicAnimationsPage;

    beforeEach(() => {
        page = new TestAngularBasicAnimationsPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
