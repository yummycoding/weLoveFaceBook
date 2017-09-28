import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaceScreens: Array<any>;

  constructor(private user: UserService, private http: Http) {
    this.http.get('assets/mock-data-home/data.json')
    .map(response => response.json().screenshots)
    .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked !== 1) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  // deleteMe(i) {
  //   this.spaceScreens.splice(i, 1);
  //   console.log(i);
  // }

  commentMe(i) {

  }

  shareMe(i) {

  }

}
