import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));
  curUsername: string = '';  
  curUserAvatar: string = '';

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
    // so need the if clause to get username
      this.curUsername = this.currentuser.user.username;
      this.curUserAvatar = this.currentuser.user.avatar;
  }
}
