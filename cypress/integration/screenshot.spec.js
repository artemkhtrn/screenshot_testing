//const routes = ['badge.html', 'button.html'];

describe('Component screenshot', () => {
  // routes.forEach((route) => {
  const componentName = ('Desktop');
  //   const testName = `${componentName} should match previous screenshot`;

    it("testName", () => {
      cy.login('/neyross/desktop/')
  
      cy.get('#tile-groups').each((element, index) => {
        const name = `${componentName}-${index}`;
  
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
});