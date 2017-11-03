import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }
}
