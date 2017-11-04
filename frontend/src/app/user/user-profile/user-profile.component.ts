import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();
  userEdit: User = new User();

  // attention!!!!! If loged based on sign up, should use 
  // userName: any = JSON.parse(localStorage.getItem("currentUser")).username;
  // Problem will be fixed if add more item to localstorage-currentUser when sign up
  // to make it similar as when sign in
  userID: String = JSON.parse(localStorage.getItem("currentUser")).user.id;

  constructor(private userService: UserService) {  
    // console.log(this.userName); 
  }

  ngOnInit() {
    this.userService.getUserByUserID(this.userID).then(data => {
      this.user = data
      Object.assign(this.userEdit, this.user);
      console.log("user info got from database", this.user);
    });
  }
  
  // getUser(user: User) {
  //   this.userService.getUser()
  //   .then(user => this.user = user)
  //   .catch(err => console.log(err));
  // }

  update_email() {
    this.userEdit.emaileditable=false;
    this.user = this.userEdit;
    this.userService.updateEmail(this.userEdit);
  }

  update_password() {
    this.userEdit.passwordeditable=false;
    this.user = this.userEdit;
    this.userService.updatePassword(this.userEdit);
    // call service.ts to store the new password(this.userEdit)
  }
}
