import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../class/user';
import { Router } from '@angular/router';
import {ValidateService} from '../service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {
  newUser = new User();
  confirmedpassword: String;
  @Output() createNewUserEvent = new EventEmitter();
  startDate = new Date(1990, 0, 1);

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private userService: UserService, private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  signupUser() {
    if (!this.validateService.validateRegister(this.newUser)) {         // validate whether all fields are filled
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert', timeout: 5000});
    }else if (!this.validateService.validateEmail(this.newUser.email)){ // validate whether email address is valid
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert', timeout: 5000});
    }else if (this.newUser.password!=this.confirmedpassword) {          // validate whether password entered are same 
      this.flashMessage.show("Passwords don't match. Please try again", {cssClass: 'alert', timeout: 5000});
    }else {
      this.validateService.usernameCanRegister(this.newUser.username).then(datausername => {
        if (datausername.success == false) {                            // validate whether username has already been taken
          this.flashMessage.show('Username already exists', {cssClass: 'alert', timeout: 5000});
        } else {
          this.validateService.emailCanRegister(this.newUser.email).then(dataemail => {
            if(dataemail.success == false) {                            // validate whether email has already been registered
              this.flashMessage.show('Email has already been registered', {cssClass: 'alert', timeout: 5000});
            } else {
              console.log('new user has been created, info: ', this.newUser);  // all validation passed, can register new user
              this.userService.create(this.newUser)         
                .then(status => {
                  //localStorage.setItem('currentUser', JSON.stringify(this.newUser));
                  this.userService.setUserLoggedIn();
                  this.router.navigate(['dashboard']);
                })
                .catch(err => console.log(err));
            }
          })
        }
      })
    }

  }

}

