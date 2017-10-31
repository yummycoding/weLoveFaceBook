import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

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
}
