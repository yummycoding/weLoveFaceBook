import { browser, by, element, protractor } from 'protractor';


export class EditProfilePage {
  // routing functions
  navigateToSignupPage() {
    browser.get('/');
    element(by.id('signupbtn')).click();
  }
  navigateToSigninPage() {
    browser.get('/');
  }

  // function functions
  signin(username,password) {
    browser.get('/');
    // sign in use username and password provided as parameters
    this.getusername_signin().sendKeys(username);
    this.getpassword_signin().sendKeys(password);
    this.getsigninbtn().click();
  }
  logoutUsingHeader() {
    this.clickbtnInMenu(this.getmenubtn(),this.getLogoutBtnFromHeader());
  }
  navigateToProfilePageFromHome() {
    this.clickbtnInMenu(this.getmenubtn(),this.getprofilebtn());
  }
  changeEmail(newemail) {
    this.getEditEmailbtn().click();
    // browser.sleep(3000);
    // this.getEmailInput(); // clear original field
    this.getEmailInput().sendKeys(newemail); 
    // browser.sleep(3000);
    this.getConfirmEditEmailbtn().click();
    // browser.sleep(3000);
  }
  changePassword(newpassword) {
    this.getEditPasswordbtn().click();
    // this.getPasswordInput(); // clear original field
    this.getPasswordInput().sendKeys(newpassword); 
    this.getConfirmEditPasswordbtn().click();
  }
  clickbtnInMenu(menu,btn) {
    var EC=protractor.ExpectedConditions;
    browser.actions().mouseMove(menu).click().perform().then(function(){
      browser.wait(EC.visibilityOf(menu),8000,'link under menu is not visible');
      browser.actions().mouseMove(btn).click().perform();
    });   
  }

  // get element functions
  getTitle() {return browser.getTitle();}
  getusername_signin() {return element(by.name('signinusername'));}
  getpassword_signin() {return element(by.name('signinpassword'));}
  getsigninbtn() {return element(by.id('signinbtn'));}
  getlocation() {return element(by.id('location'));}
  getmenubtn() {return element(by.id('menubtn'));}
  getprofilebtn() {return element(by.id('userprofilebtn'));}
  getEditEmailbtn() {return element(by.id('editemailbtn'));}
  getEmailInput() {return element(by.name('email'));}
  getConfirmEditEmailbtn() {return element(by.id('confirmemailbtn'));}
  getEditPasswordbtn() {return element(by.id('editpasswordbtn'));}
  getPasswordInput() {return element(by.name('password'));}
  getConfirmEditPasswordbtn() {return element(by.id('confirmpasswordbtn'));}
  getLogoutBtnFromHeader() {return element(by.id('logout_header'));}
}
