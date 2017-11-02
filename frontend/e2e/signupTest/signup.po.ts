// import { browser, by, element, protractor } from 'protractor';


// export class SignUpPage {
//   // routing functions
//   navigateToSignupPage() {
//     browser.get('/');
//     element(by.id('signupbtn')).click();
//   }
//   navigateToSigninPage() {
//     browser.get('/');
//   }
  
//   // function functions
//   clickbtnInMenu(menu,btn) {
//     var EC=protractor.ExpectedConditions;
//     browser.actions().mouseMove(menu).click().perform().then(function(){
//       browser.wait(EC.visibilityOf(menu),8000,'link under menu is not visible');
//       browser.actions().mouseMove(btn).click().perform();
//     });   
//   }

//   // get element functions
//   getTitle() {return browser.getTitle();}
//   // fields required in sign up form (need add gender field)
//   getusername_signup() {return element(by.name('signupusername'));}
//   getnickname_signup() {return element(by.name('nickname'));}
//   getpassword_signup() {return element(by.name('signuppassword'));}
//   getconfirmedpassword() {return element(by.name('confirmedpassword'));}
//   getemail_signup() {return element(by.name('email'));}
//   getbirthday_signup() {return element(by.name('birthday'));}
//   getsubmitbtn() { return element(by.id('signupsubmitbtn'));}
//   getcancelbtn() { return element(by.id('signupcancelbtn'));}
//   // fields needed for sign in
//   getusername_signin() {return element(by.name('signinusername'));}
//   getpassword_signin() {return element(by.name('signinpassword'));}
//   getsigninbtn() {return element(by.id('signinbtn'));}
//   getlocation() {return element(by.id('location'));}
//   getmenubtn() {return element(by.id('menubtn'));}
//   getprofilebtn() {return element(by.id('userprofilebtn'));}
//   // fields in user profile
//   getusername_profile() {return element(by.id('prfusername'));}
//   getnickname_profile() {return element(by.id('prfnickname'));}
//   getbirthday_profile() {return element(by.id('prfbirthday'));}
//   getemail_profile() {return element(by.id('prfemail'));}
// }
