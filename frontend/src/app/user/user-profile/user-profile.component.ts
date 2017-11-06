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
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));
  username: String = '';  

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
    // so need the if clause to get username
    // console.log(this.currentuser);
    // if('token' in this.currentuser){
    this.username = this.currentuser.user.username;
    // }else {
    //   this.username = this.currentuser.username;
    // };
    // get all user information from database and assign to user and useredit
    this.userService.getUserByUsername(this.username).then(data => {
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
  }
}
