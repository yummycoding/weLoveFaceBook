import { browser, by, element, protractor } from 'protractor';
import { PostFunc } from './postfunction.po';
import {} from 'jasmine';

describe('Post function:', () => {
    let postfunc:PostFunc;
    let username:string = 'e2etest9';
    let password:string = 'Admin$$$1';

    beforeEach(() => {
        postfunc = new PostFunc();
    })

    it('should successfully make post', () => {
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        postfunc.sendPost("new post from user");
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        expect(postfunc.getAllPostsContent().count()).toEqual(1);
        expect(postfunc.getAllPostsAuthor().get(0).getText()).toEqual(username);
        expect(postfunc.getAllPostsContent().get(0).getText()).toEqual("new post from user");
    })

    it('should successfully like a post', () => {
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        // add like 
        postfunc.getAllPostsLikeBtn().get(0).click();
        expect(postfunc.getAllPostsLikeNum().get(0).getText()).toEqual("1");
        expect(postfunc.getAllPostsLikeBy().get(0).getText()).toContain(username);
        // cancel like
        postfunc.getAllPostsLikeBtn().get(0).click();
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        expect(postfunc.getAllPostsLikeNum().get(0).isPresent()).toBe(false);
        expect(postfunc.getAllPostsLikeBy().get(0).isPresent()).toBe(false);
    })

    it('should successfully make a comment', () => {
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        // add comment
        postfunc.getAllPostsCommentBtn().get(0).click();
        postfunc.getCommentInput().sendKeys("I like this post dude!");
        postfunc.getCommentSend().click();

        // login again and check comments
        postfunc.navigateToLoginPage();
        postfunc.signinUser(username,password);
        // var commentoffirstpost = element.all(by.id('postcards')).all(by.id('commentssection')).get(0);
        // var commentatoroffirstcomment = element.all(by.id('commentsfor')).all(by.id('commentator')).get(0);
        // var commentatoroffirstcomment = element.all(by.id('postcards')).all(by.id('commentssection')).get(0).all(by.id('commentsfor')).all(by.id('commentator')).get(0);
        // expect(commentatoroffirstcomment).toEqual(username);
    })
});