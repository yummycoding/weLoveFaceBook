import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

// // }
// // Weather.getCurrent("Gainesville", function(current) {
// //   console.log(
// //     ["currently:",current.temperature(),"and",current.conditions()].join(" ")
// //   );
// // });
