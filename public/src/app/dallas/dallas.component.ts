import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor() { }
  weather : any;
  status : any;
  ngOnInit() {
    this.getweather();
  }

  getweather(){
    var request = new XMLHttpRequest();
    var parent = this;
    request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=391b84efa1bb19a9661321d67dd9a11c', true)
    request.onload = function(){
      parent.weather = JSON.parse(this.response)["main"];
      parent.status = JSON.parse(this.response)["weather"]
    }
    request.send();
  }
}
