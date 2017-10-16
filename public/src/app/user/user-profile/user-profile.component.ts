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
  user = new User("123","admin","admin","eezhanagjunhao@gmail.com","frankzhang",0,"08/11/1993",false,false);
  userEdit: User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.user);
  }
  
  update_email() {
    this.userEdit.emaileditable=false;
    this.user = this.userEdit;
    // call service.ts to store the new email address(this.userEdit)
  }

  update_password() {
    this.userEdit.passwordeditable=false;
    this.user = this.userEdit;
    // call service.ts to store the new password(this.userEdit)
  }
}
