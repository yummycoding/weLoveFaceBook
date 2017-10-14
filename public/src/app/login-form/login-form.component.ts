import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  signinUser = new User();
  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.signinUser.username = username;
    this.signinUser.password = password;
    // this.user.loginUser(username, password)
    // .subscribe(
    //     data => {
    //       console.log(data);
    //         this.router.navigate(['dashboard']);
    //     },
    //     error => {
    //       console.log(error);
    //         // this.alertService.error(error);
    //         // this.loading = false;
    //     });
    this.user.loginUser(username, password)
    .then(status => {
      console.log(status);
      if (status) {
        this.router.navigate(['dashboard']);
        this.user.setUserLoggedIn();
      } else {
        this.router.navigate(['']);
      }
    }).catch(err => console.log(err));
  }
  getUser() {
  }
}
