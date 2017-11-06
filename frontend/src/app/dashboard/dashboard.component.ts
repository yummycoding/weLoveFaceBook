import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));
  curUsername: String = '';  

  constructor(private router: Router) {

  }

  ngOnInit() {
    // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
    // so need the if clause to get username
    if('token' in this.currentuser){
      this.curUsername = this.currentuser.user.username;
    }else {
      this.curUsername = this.currentuser.username;
    };
    // console.log("current username got from dashboard: ", this.curUsername);
  }

}
