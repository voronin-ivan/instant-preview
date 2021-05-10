import { visitApp, testViewports, matchFullPageSnapshot } from '../support/commands';

describe('Main page', () => {
    testViewports((viewport) => {
        it(`Visual test on ${viewport}`, () => {
            visitApp();
            matchFullPageSnapshot(`main_page__${viewport}`);
        });
    });
});
