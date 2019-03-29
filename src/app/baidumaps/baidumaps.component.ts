import { Component, OnInit } from '@angular/core';
import { MapOptions, NavigationControlOptions } from 'angular2-baidu-map';
@Component({
  selector: 'app-baidumaps',
  templateUrl: './baidumaps.component.html',
  styleUrls: ['./baidumaps.component.scss']
})
export class BaidumapsComponent implements OnInit {
  options: MapOptions;
  constructor() {
    
  }

  ngOnInit() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    };
  }
}
