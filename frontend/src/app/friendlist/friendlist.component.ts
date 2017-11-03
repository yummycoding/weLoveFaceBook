import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  A = [
    {
      name: 'Allan',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Andrew',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Ashe',
      updated: new Date('1/28/16'),
    }
  ];
  B = [
    {
      name: 'Bob',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Boss',
      updated: new Date('1/18/16'),
    }
  ];
}
