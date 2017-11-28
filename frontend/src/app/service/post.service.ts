import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Post } from '../class/post';
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
    console.log("Client > post to be deleted > postid" > postid);
    return this._http.delete('/posts/deletePost/' + postid).map(data => data.json()).toPromise();
  }

  getSelfPosts(username:String) {
    console.log("Client > Get all post of myself > username", username);
    return this._http.get('/posts/getSelfPosts/' + username).map(data => data.json()).toPromise();
  }

  getHomePosts(curUser: User) {
    console.log("Client > GET > /posts/getHomePosts/:username", curUser.username);
    return this._http.get('/posts/getHomePosts/'+ curUser.username).map(data => data.json()).toPromise();
  }

  addOrCancelLikePosts(post:Post,username:String) {
    console.log("Client > PUT > /posts/likePostOrCancelLike/:username", username);
    return this._http.put('/posts/likePostOrCancelLike/' + username , post).map(data => data.json()).toPromise();
  }
  updateComment(post: Post) {
    console.log("Client > PUT > /posts/updateComment/:id" + post._id);
    return this._http.put('/posts/updateComment/' + post._id , post).map(data => data.json()).toPromise();
  }
}
