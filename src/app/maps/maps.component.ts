import { Component, OnInit } from '@angular/core';
declare var BMap: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  constructor() {}
  // BMap = BMap
  ngOnInit() {
    // var node = document.createElement('script');
    // node.src =
    //   'http://api.map.baidu.com/api?v=2.0&ak=Wk5ZhRGh5b5FjsVzf2LQex4v&callback=initialize';
    // node.type = 'text/javascript';
    // document.getElementsByTagName('head')[0].appendChild(node);
    // console.log(window.BMap);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    var map = new BMap.Map('maps');
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }
}
