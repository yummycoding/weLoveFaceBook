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
    // sign in use username and password provided as parameters
    this.getusername_signin().clear();
    this.getusername_signin().sendKeys(username);
    this.getpassword_signin().clear();
    this.getpassword_signin().sendKeys(password);
    this.getsigninbtn().click();
  }
  logoutUsingHeader() {
    this.clickbtnInMenu(this.getmenubtn(),this.getLogoutBtnFromHeader());
  }
  navigateToProfilePageFromHome2() {
    this.clickbtnInMenu(this.getmenubtn(),this.getprofilebtn());
  }
  navigateToProfilePageFromHome() {
    browser.get('/userprofile');
  }
  changeEmail(newemail) {
    this.getEditEmailbtn().click();
    this.getEmailInput().clear(); 
    this.getEmailInput().sendKeys(newemail); 
    this.getConfirmEditEmailbtn().click();
  }
  changePassword(newpassword) {
    this.getEditPasswordbtn().click();
    this.getPasswordInput().clear();
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
  getEmailInput() {return element(by.name('email'));} //place to fill in new email address (appears after click edit)
  getemail_profile() {return element(by.id('prfemail'));}  //Email displayed on profile page
  getusername_profile() {return element(by.id('prfusername'));}
  getnickname_profile() {return element(by.id('prfnickname'));}
  getbirthday_profile() {return element(by.id('prfbirthday'));}
  getConfirmEditEmailbtn() {return element(by.id('confirmemailbtn'));}
  getEditPasswordbtn() {return element(by.id('editpasswordbtn'));}
  getPasswordInput() {return element(by.name('password'));}
  getConfirmEditPasswordbtn() {return element(by.id('confirmpasswordbtn'));}
  getLogoutBtnFromHeader() {return element(by.id('logout_header'));}
}
