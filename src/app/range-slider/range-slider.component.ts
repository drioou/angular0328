import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  range: number = 20;

  constructor() {}

  ngOnInit() {
    const input = document.querySelector('input');
    input.addEventListener('input', (e: any) => {
      this.range = e.target.value;
    });
  }
}
