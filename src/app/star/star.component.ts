import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  constructor() {}
  star = [];
  ngOnInit() {
    for (var i = 0; i < 800; i++) {
      this.star.push({
        width: Math.random() * 3,
        s: Math.random() * 20,
        h: Math.random() * 1000,
        left: Math.random() * 2000
      });
    }
  }
}
