import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {
  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();
  startDate = new Date(1990, 0, 1);
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  signupUser() {
    this.userService.create(this.newUser)
    .then(status => {
      localStorage.setItem('currentUser', JSON.stringify(this.newUser));
      this.userService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    })
    .catch(err => console.log(err));
  }

}

