import { browser, by, element, protractor } from 'protractor';

export class PostFunc {
    // navigate functions
    navigateToLoginPage() {
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
    sendPost(postcontent) {
        this.getPostTriggerBtn().click();
        this.getPostInput().sendKeys(postcontent);
        this.getPostSendBtn().click();
    }

    // elements for signin
    getusername_signin() {return element(by.name('signinusername'));}
    getpassword_signin() {return element(by.name('signinpassword'));}
    getsigninbtn() {return element(by.id('signinbtn'));}
    getPostTriggerBtn() {return element(by.id('makepost'));}
    getPostInput() {return element(by.name('postinput'));}
    getPostSendBtn() {return element(by.id('sendpost'));}
    // elements for post related
    getAllPostsAuthor() {return element.all(by.id('postcards')).all(by.id('postauthor'));}
    getAllPostsContent() {return element.all(by.id('postcards')).all(by.id('postcontent'));}
    getAllPostsLikeBtn() {return element.all(by.id('postcards')).all(by.id('likebtn'));}
    getAllPostsLikeNum() {return element.all(by.id('postcards')).all(by.id('likenum'));}
    getAllPostsLikeBy() {return element.all(by.id('postcards')).all(by.id('likeby'));}
    getAllPostsCommentBtn() {return element.all(by.id('postcards')).all(by.id('commentbtn'));}
    getCommentInput() {return element(by.name('commentinput'));}
    getCommentSend() {return element(by.id('commentsendbtn'));}
    
    

    // getlocation() {return element(by.id('location'));}
    // getlocation() {return element(by.id('location'));}
}