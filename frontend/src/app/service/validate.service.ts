import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ValidateService {

  constructor(private _http: Http) { }

  validateRegister(user) {
    if (user.nickname === undefined ||
        user.nickname === '' ||
        user.email === undefined ||
        user.email === '' ||
        user.username === undefined ||
        user.username === '' ||
        user.password === undefined ||
        user.password === '' ||
        user.dob === undefined ||
        user.dob === '') {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateLogin(user) {
    if (user.username === undefined ||
      user.username === '' ||
      user.password === undefined ||
      user.password === '') {
        return false;
      } else {
        return true;
      }
    }

    // return true if username not registered yet
    usernameCanRegister(username:string) {
      console.log("Client > Check whether username exists > ",username)
      return this._http.get('/users/checkUsername/' + username).map(data => data.json()).toPromise()
    }
  
    // return true if email not not registered yet
    emailCanRegister(email:string) {
      console.log("Client > Check whether email exists > ",email)
      return this._http.get('/users/checkEmail/' + email).map(data => data.json()).toPromise()
    }
  }
