//const routes = ['badge.html', 'button.html'];

describe('Component screenshot', () => {
  // routes.forEach((route) => {
  //   const testName = `${componentName} should match previous screenshot`;

    it("Desktop", () => {
      cy.login('/neyross/desktop/')
      const componentName = ('Desktop');
  
      cy.get('#tile-groups').each((element, index) => {
        const name = `${componentName}-${index}`;
  
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
    it.only("rbac", () => {
      cy.login('/neyross/vmc-rbac/');
      const componentName = ('rbac');

      cy.get('.ant-layout.rbac__main').each((element, index) => {
        const name = `${componentName}-${index}`;
  
        cy.wrap(element).matchImageSnapshot(name);
      })
    })
});