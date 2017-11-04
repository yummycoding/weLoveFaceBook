import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  signinUser = new User();
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private user: UserService, private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    // console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.signinUser.username = username;
    this.signinUser.password = password;

    if (!this.validateService.validateLogin(this.signinUser)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert', timeout: 3000});
      return false;
    }

    this.user.loginUser(username, password)
    .then(status => {
      // console.log(status);
      if (status) {
        this.router.navigate(['dashboard']);
        this.user.setUserLoggedIn();
      } else {
        this.flashMessage.show('Wrong username or password', {cssClass: 'alert', timeout: 3000});
        // this.router.navigate(['']);
      }
    }).catch(err => console.log(err));
  }
  getUser() {
  }
}
