import { browser, by, element, protractor } from 'protractor';
import { EditProfilePage } from './editprofile.po';
import {} from 'jasmine';

describe('Profile edit:', () => {
  let profilepage: EditProfilePage;
  var username =  "e2etest20";
  var email_old = "e2etest20@ufl.edu";
  var email_new = "e2etest20@gmail.com";
  var password_old = "Admin$$$1";
  var password_new = "Newpassword$$$1";

  beforeEach(() => {
    profilepage = new EditProfilePage();
    // route to profile edit page
    profilepage.navigateToSigninPage();
  });

  it('should successfully change email address without modifying other fields', () => {
    // log in, go to profile edit page
    profilepage.signin(username,password_old);
    browser.sleep(1000); // time leaving for system's sign in delay
    profilepage.navigateToProfilePageFromHome();
    // change email
    profilepage.changeEmail(email_new);
    // logout, reroute to page, and check all fields except password
    // profilepage.logoutUsingHeader();
    profilepage.navigateToSigninPage();
    profilepage.signin(username,password_old);
    profilepage.navigateToProfilePageFromHome();
    expect(profilepage.getemail_profile().getAttribute('value')).toEqual(email_new);
    expect(profilepage.getusername_profile().getAttribute('value')).toEqual(username);
    expect(profilepage.getnickname_profile().getAttribute('value')).toEqual("Florida Code Farmer");
    expect(profilepage.getbirthday_profile().getAttribute('value')).toEqual("10/01/1949");
  });

  it('should successfully change password without modifying other fields', () => {
    // log in, go to profile edit page
    profilepage.signin(username,password_old);
    browser.sleep(1000); // time leaving for system's sign in delay
    profilepage.navigateToProfilePageFromHome();
    // change password
    profilepage.changePassword(password_new);
    // logout 
    profilepage.navigateToSigninPage();
    // try old password, should not login
    profilepage.signin(username,password_old);
    expect(profilepage.getlocation().getText()).toEqual("-- share your beautiful life");
    // try new password, should login
    profilepage.signin(username,password_new);
    expect(profilepage.getlocation().getText()).toEqual("Welcome to Gatorbook!");
    // check all fields except password
    profilepage.navigateToProfilePageFromHome();
    
    expect(profilepage.getemail_profile().getAttribute('value')).toEqual(email_new);
    expect(profilepage.getusername_profile().getAttribute('value')).toEqual(username);
    expect(profilepage.getnickname_profile().getAttribute('value')).toEqual("Florida Code Farmer");
    expect(profilepage.getbirthday_profile().getAttribute('value')).toEqual("10/01/1949");
  });

  it('should success when changing email and password at the same time', () => {
    // log in, go to profile edit page
    profilepage.signin(username,password_new);
    browser.sleep(1000); // time leaving for system's sign in delay
    profilepage.navigateToProfilePageFromHome();
    // change password and email back to original
    profilepage.changePassword(password_old);
    browser.refresh();
    profilepage.changeEmail(email_old);
    // login using original password
    profilepage.navigateToSigninPage();
    profilepage.signin(username,password_old);
    expect(profilepage.getlocation().getText()).toEqual("Welcome to Gatorbook!");
    
    // check all fields except password
    profilepage.navigateToProfilePageFromHome();
    expect(profilepage.getemail_profile().getAttribute('value')).toEqual(email_old);
    expect(profilepage.getusername_profile().getAttribute('value')).toEqual(username);
    expect(profilepage.getnickname_profile().getAttribute('value')).toEqual("Florida Code Farmer");
    expect(profilepage.getbirthday_profile().getAttribute('value')).toEqual("10/01/1949");
  });

});
