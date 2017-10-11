import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;
  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  create(user: User) {
    return this._http.post('/users', user).map(data => data.json()).toPromise();
  }

  destroy(user: User) {
    return this._http.delete('/users/' + user._id).map(data => data.json()).toPromise();
  }
  update(user: User) {
    return this._http.put('/users/' + user._id, user).map(data => data.json()).toPromise();
  }
  getUser(user: User) {
    return this._http.get('/users/' + user._id).map(data => data.json()).toPromise();
  }
  getUsers() {
    return this._http.get('/users').map(data => data.json()).toPromise();
  }
  loginUser(username: String, password: String) {
    return this._http.post('/users/authenticate', { username: username, password: password})
    .map(data => data.json()).toPromise();
  }
}
