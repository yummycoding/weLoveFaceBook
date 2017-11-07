import { browser, by, element, protractor } from 'protractor';
import { SignUpPage } from './signup.po';
import {} from 'jasmine';

describe('Sign up:', () => {
  let signuppage: SignUpPage;
  var newusername = "e2etest6";
  var newemail =    "e2etest6@ufl.edu";
  var newpassword = "Admin$$$1";

  beforeEach(() => {
    signuppage = new SignUpPage();
  });

  it('should have correct title at signup page', () => {
    signuppage.navigateToSignupPage();
    expect(signuppage.getTitle()).toEqual('GatorBook');
  });

  it('should display each field after user types in signup form', ()=>{
    // fields required in sign up form (need add gender field)
    var username_signup   =signuppage.getusername_signup();  
    var nickname_signup   =signuppage.getnickname_signup();
    var password_signup   =signuppage.getpassword_signup(); 
    var confirmedpassword =signuppage.getconfirmedpassword();
    var email_signup      =signuppage.getemail_signup();
    var birthday_signup   =signuppage.getbirthday_signup();
    var submitbtn         =signuppage.getsubmitbtn();

    signuppage.navigateToSignupPage();

    // filling up registration form and check whether it displays on screen
    username_signup.sendKeys(newusername);
    expect(username_signup.getAttribute('value')).toEqual(newusername);

    nickname_signup.sendKeys("Florida Code Farmer");
    expect(nickname_signup.getAttribute('value')).toEqual("Florida Code Farmer");

    password_signup.sendKeys(newpassword);
    confirmedpassword.sendKeys(newpassword);

    email_signup.sendKeys(newemail);
    expect(email_signup.getAttribute('value')).toEqual(newemail);

    birthday_signup.sendKeys("10/01/1949");
    expect(birthday_signup.getAttribute('value')).toEqual("10/01/1949");
    
    // submit registration form
    submitbtn.click();
  });

  it('should save correct information in database (by checking information in user profile)', ()=>{
    // fields required
    var username_signin   =signuppage.getusername_signin();
    var password_signin   =signuppage.getpassword_signin();
    var signinbtn         =signuppage.getsigninbtn();
    var location          =signuppage.getlocation();
    var menubtn           =signuppage.getmenubtn();
    var profilebtn        =signuppage.getprofilebtn();
    var username_profile  =signuppage.getusername_profile();
    var nickname_profile  =signuppage.getnickname_profile();
    var email_profile     =signuppage.getemail_profile();
    var birthday_profile  =signuppage.getbirthday_profile();
    
    signuppage.navigateToSigninPage();
    // try a wrong password
    username_signin.sendKeys(newusername);
    password_signin.sendKeys("wrongpassword");
    signinbtn.click();
    expect(location.getText()).toEqual("-- share your beautiful life"); //you get this because you're still in signin page
    // try the correct password
    browser.refresh();
    username_signin.sendKeys(newusername);
    password_signin.sendKeys(newpassword);
    signinbtn.click();
    expect(location.getText()).toEqual("Welcome to Gatorbook!"); //you get this because you have logged in successfully and in home page
    
    // navigate to edit profile page to check all other fields correct or not 
    signuppage.clickbtnInMenu(menubtn,profilebtn);
    expect(username_profile.getAttribute('value')).toEqual(newusername);
    expect(nickname_profile.getAttribute('value')).toEqual("Florida Code Farmer");
    expect(email_profile.getAttribute('value')).toEqual(newemail);
    expect(birthday_profile.getAttribute('value')).toEqual("10/01/1949");
  });
});
