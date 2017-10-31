import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {ValidateService} from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {
  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();
  startDate = new Date(1990, 0, 1);

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private userService: UserService, private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  signupUser() {

    console.log('new user has been created, info: ', this.newUser);
    if (!this.validateService.validateRegister(this.newUser)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert', timeout: 3000});
      return false;
    }
    if (!this.validateService.validateEmail(this.newUser.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert', timeout: 3000});
      return false;
    }
    if (this.validateService.validateRegister(this.newUser) && this.validateService.validateEmail(this.newUser.email)) {
      this.userService.create(this.newUser)
        .then(status => {
          localStorage.setItem('currentUser', JSON.stringify(this.newUser));
          this.userService.setUserLoggedIn();
          this.router.navigate(['dashboard']);
        })
        .catch(err => console.log(err));
    }
  }

}

