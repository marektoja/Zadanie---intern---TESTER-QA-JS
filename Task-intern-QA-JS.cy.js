describe("Task", () => {
    it("Entering the page", () => {
      cy.visit("/sampleapp")
    })
  })
    it("1: Empty username and empty password.", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type(" ");
      cy.get('input[name="Password"]').type(" ");
      cy.get('button#login').click();
    })
    it("2: Empty username and valid password", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type(" ");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })
    it("3: Valid username and unvalid password.", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type(" ");
      cy.get('button#login').click();
    })
    it("4: Valid username and valid password.", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })
    it("5: Reloading page in a browser", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
      cy.reload()
    })
    it("6: Typing too many characters in „login box”", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1111111111111111111111111111111111111111");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })
    it("7: Checking if password is masked", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })
    it("8: Checking if password can be copied", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })
    it("9: Checking if user is still logged in after cliking „back” and „forward” in a browser", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
      cy.go('back')
      cy.go('forward')
    })
    it("10: Clicking: „Log out”", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("1");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
      cy.get('button#login').click();
    })
    it("11: Typing NoASCI signs, characters", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("日本人中國的~=[]()%+{}@;#!$_&-éè;∞¥₤€");
      cy.get('input[name="Password"]').type("1");
      cy.get('button#login').click();
    })
    it("12: Typing NoASCI signs, characters ", () => {
      cy.visit("/sampleapp");
      cy.get('input[name="UserName"]').type("日本人中國的~=[]()%+{}@;#!$_&-éè;∞¥₤€");
      cy.get('input[name="Password"]').type("pwd");
      cy.get('button#login').click();
    })