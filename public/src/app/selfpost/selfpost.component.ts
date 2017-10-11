import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-selfpost',
  templateUrl: './selfpost.component.html',
  styleUrls: ['./selfpost.component.css']
})
export class SelfpostComponent implements OnInit {

  spaceScreens: Array<any>;

  constructor(private user: UserService, private http: Http) {
    this.http.get('assets/mock-data-mypost/data.json')
    .map(response => response.json().screenshots)
    .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
  }
  markMe(i) {
    if (this.spaceScreens[i].marked !== 1) {
      this.spaceScreens[i].marked = 1;
    } else {
      this.spaceScreens[i].marked = 0;
    }
  }
  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
