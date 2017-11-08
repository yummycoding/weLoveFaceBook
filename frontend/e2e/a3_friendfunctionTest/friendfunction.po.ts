import { browser, by, element, protractor } from 'protractor';

export class FriendPage {
    // routing functions
    navigateToSignupPage() {
      browser.get('/');
      element(by.id('signupbtn')).click();
    }
    navigateToSigninPage() {
      browser.get('/');
    }
  
    // function functions
    signinUser(username,password) {
        // sign in use username and password provided as parameters
        this.getusername_signin().clear();
        this.getusername_signin().sendKeys(username);
        this.getpassword_signin().clear();
        this.getpassword_signin().sendKeys(password);
        this.getsigninbtn().click();
    }
    signupUser(username, email) {
        this.navigateToSignupPage();
        this.getusername_signup().sendKeys(username);  
        this.getnickname_signup().sendKeys("Florida Code Farmer");
        this.getpassword_signup().sendKeys("Admin$$$1"); 
        this.getconfirmedpassword().sendKeys("Admin$$$1");
        this.getemail_signup().sendKeys(email);
        this.getbirthday_signup().sendKeys("10/01/1949");
        this.getsubmitbtn().click();
    }
    addFriendByName(friendname) { // need to be at friend list page(click friend list tab) first before call this!!!
        this.getAddFriendBtn().click();
        this.getFriendNameInput().sendKeys(friendname);
        browser.sleep(2000);
        this.getFriendSendBtn().click();
    }
    // clickbtnInMenu(menu,btn) {
    //   var EC=protractor.ExpectedConditions;
    //   browser.actions().mouseMove(menu).click().perform().then(function(){
    //     browser.wait(EC.visibilityOf(menu),8000,'link under menu is not visible');
    //     browser.actions().mouseMove(btn).click().perform();
    //   });   
    // }
    
    // get element functions
    // elements for signup
    getusername_signup() {return element(by.name('signupusername'));}
    getnickname_signup() {return element(by.name('nickname'));}
    getpassword_signup() {return element(by.name('signuppassword'));}
    getconfirmedpassword() {return element(by.name('confirmedpassword'));}
    getemail_signup() {return element(by.name('email'));}
    getbirthday_signup() {return element(by.name('birthday'));}
    getsubmitbtn() { return element(by.id('signupsubmitbtn'));}
    getcancelbtn() { return element(by.id('signupcancelbtn'));}
    // elements for signin
    getTitle() {return browser.getTitle();}
    getusername_signin() {return element(by.name('signinusername'));}
    getpassword_signin() {return element(by.name('signinpassword'));}
    getsigninbtn() {return element(by.id('signinbtn'));}
    getlocation() {return element(by.id('location'));}
    // elements for friendpage
    getFriendRouteBtn() {return element(by.id('friendlist'))}; // problematic
    getAddFriendBtn() {return element(by.id('addfriend'))}; // click btn to pop up add fiend interface
    getFriendNameInput() {return element(by.name('friendnametoadd'))};
    getFriendEmailInput() {return element(by.name('friendemailtoadd'))};
    getFriendSendBtn() {return element(by.name('sendbtnforaddingfriend'))}; // click btn to send your adding friend request
    getFriendCancelBtn() {return element(by.name('cancelbtnforaddingfriend'))}; // click btn to cancel, to close add friend interface
    getmenubtn() {return element(by.id('menubtn'));}
  }
  