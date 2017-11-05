import { Injectable } from '@angular/core';
import { User } from './user';
import { Post } from './post';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {

  constructor(private _http: Http) {
  }

  sendPost(post:Post) {
    console.log("Client > New post to be added > post ", post);
    return this._http.post('/posts/newPost', post).map(data => data.json()).toPromise();
  }

  deletePost(postid:String) {
    console.log("client > post to be deleted > postid" > postid);
    return this._http.delete('/posts/deletePost/' + postid).map(data => data.json()).toPromise();
  }

  getSelfPosts(username:String) {
    console.log("Client > Get all post of myself > username", username);
    return this._http.get('/posts/getSelfPosts/' + username).map(data => data.json()).toPromise();
  }

  getHomePosts(curUser: User) {
    console.log("Client > Get posts from myself and all my friends >");
    // return this._http.get('/getHomePosts/'+ curUser.username, curUser.friendlist).map(data => data.json()).toPromise();
    return this._http.get('/getHomePosts/'+ curUser.username, curUser.username).map(data => data.json()).toPromise();
  }

}
