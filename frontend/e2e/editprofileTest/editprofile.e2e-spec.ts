import { browser, by, element, protractor } from 'protractor';
import { EditProfilePage } from './editprofile.po';
import {} from 'jasmine';

describe('Profile edit function testing', () => {
  let profilepage: EditProfilePage;
  var username = "a2";
  var password_old = "admin";
  var password_new = "newpassword";
  var email_old = "gatorbook@ufl.edu";
  var email_new = "newemail@ufl.edu"

  

  beforeEach(() => {
    profilepage = new EditProfilePage();
  });

  it('should successfully change email address', () => {
    // sign in use username and password provided as parameters
    profilepage.signin(username,password_old);

    profilepage.navigateToProfilePageFromHome();

    profilepage.changeEmail(email_new);
    // logout, reroute to page, and check all fields except password
    // profilepage.logoutUsingHeader();
    // profilepage.signin(this.username,this.password_old);
    // profilepage.navigateToProfilePageFromHome();
    browser.sleep(4000);
  });

  it('should successfully change password', () => {
    // route to profile edit page

    // change password

    // logout 

    // try old password, should not login

    // try new password, should login

    // check all fields except password

  });

  it('should success when changing email and password at the same time', () => {
    // change password back to original

    // login using new password

    // check all fields except password
  });

});
