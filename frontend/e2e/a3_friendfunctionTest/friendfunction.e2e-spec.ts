// import { browser, by, element, protractor } from 'protractor';
// import { FriendPage } from './friendfunction.po';
// import {} from 'jasmine';

// describe('Friends function:', () => {
//     let friendpage: FriendPage;
//     var username1 =  "e2etest6";
//     var email1    =  "e2etest6@ufl.edu";
//     var username2 =  "e2etest7";
//     var email2    =  "e2etest7@ufl.edu";
  
//     beforeEach(() => {
//       friendpage = new FriendPage();
//       friendpage.navigateToSigninPage();
//     });
  
//     it('should add friends successfully', () => {
//       //sign up two users, username1 and username2
//       friendpage.signupUser(username1,email1);
//       friendpage.signupUser(username2,email2);
//       friendpage.navigateToSigninPage();
//       friendpage.signinUser(username1,"Admin$$$1"); 
//       friendpage.getFriendRouteBtn().click();// stuck on this!!!!!!!!!!!! cannot route to friendlist tab
//       browser.sleep(2000);
//       friendpage.addFriendByName(username2);
//     });
  
// });
  
