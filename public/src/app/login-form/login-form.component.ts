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
    this.user.loginUser(username, password)
    .then(status => {
      localStorage.setItem('currentUser', JSON.stringify(this.signinUser));
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }).catch(err => console.log(err));
  }
  getUser() {
  }
}
