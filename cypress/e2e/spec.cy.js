const cookies = [
  {
    name: 'cookie_name_1',
    value: 'cookie_value_1',
    domain: 'your-domain.com',
    path: '/',
  },
  {
    name: 'cookie_name_2',
    value: 'cookie_value_2',
    domain: 'your-domain.com',
    path: '/',
  },
];

// Set the cookies in a beforeEach hook or before running your tests
describe('Test with browser cookies', () => {
  beforeEach(() => {
    // Visit the page so cookies can be set
    cy.visit('https://your-domain.com');

    // Set each cookie
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        path: cookie.path,
      });
    });

    // Reload the page to apply cookies
    cy.reload();
  });

  it('Your test case', () => {
    // Add your test code here
  });
});