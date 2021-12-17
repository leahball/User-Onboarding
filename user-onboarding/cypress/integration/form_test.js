describe("User-Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const usernameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tos = () => cy.get("input[name=tos]");
  const submitButton = () => cy.get('input[id="submit"]');

  it("Sanity check to make sure tests work", () => {
    expect(2 + 2).to.equal(4);
    expect(3 + 4).not.to.equal(9);
  });

  it("The proper elements are showing", () => {
    usernameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitButton().should("exist");
  });

  describe("Filling out the inputs and submitting", () => {
    it("Submit button should start out disabled", () => {
      submitButton().should("be.disabled");
    });

    it("Can type fields", () => {
      usernameInput()
        .should("have.value", "")
        .type("bellhooks")
        .should("have.value", "bellhooks");
      emailInput()
        .should("have.value", "")
        .type("bellhooks@email.com")
        .should("have.value", "bellhooks@email.com");
      passwordInput()
        .should("have.value", "")
        .type("password420")
        .should("have.value", "password420");
    });

    it("Can check terms of service on and off", () => {
      tos()
        .should("not.be.checked")
        .click()
        .should("be.checked")
        .click()
        .should("not.be.checked");
    });

    describe("Submitting a new User", () => {
      it("The submit button activates when all fields have been filled", () => {
        usernameInput().type("bellhooks");
        emailInput().type("bellhooks@email.com");
        passwordInput().type("password420");
        tos().click();
        submitButton().should("not.be.disabled");
      });

      it("The submit button deactivates when user clears a required field", () => {
        usernameInput().type("bellhooks");
        emailInput().type("bellhooks@email.com");
        passwordInput().type("password420");
        tos().click();
        submitButton().should("not.be.disabled");
        usernameInput().clear();
        submitButton().should("be.disabled");
      });

      it("user able to submit a new User", () => {
        usernameInput().type("bellhooks");
        emailInput().type("bellhooks@email.com");
        passwordInput().type("password420");
        tos().click();
        submitButton().click();
      });
    });
  });
});
