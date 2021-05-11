const VIEWPORTS = ['macbook-15', 'ipad-2', 'iphone-x'] as const;

type Viewport = typeof VIEWPORTS[number];
type Callback = (value: Viewport, index: number, array: readonly Viewport[]) => void;

export const testViewports = (callback: Callback) => {
    VIEWPORTS.forEach((...args) => {
        const [viewport] = args;

        context(`Running tests on ${viewport}...`, () => {
            beforeEach(() => {
                cy.viewport(viewport);
            });

            callback(...args);
        });
    });
};

export const findByTestId = (id: string) => cy.get(`[data-test-id=${id}]`);

export const matchFullPageSnapshot = (name: string) => {
    // removing `position: sticky` for snapshots
    findByTestId('editor-left-col').invoke('css', 'position', 'relative');

    cy.matchImageSnapshot(name, {
        capture: 'fullPage',
    });
};

export const visitApp = () => {
    // static html for local checks
    const url = Cypress.env('url') || 'build/index.html';

    cy.visit(url);

    // dirty-hack bc of uncontrolled animation in react-toolbox
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
};
