import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
  // placeholder: object = document.getElementsByTagName('input')
  placeholder: any;
  valueArray: string[] = [];
  place1: string = 'somethingsomethingsomethingsomething';
  place = '';
  writePlaceholder(text, i, e): void {
    if (i < text.length) {
      this.placeholder[e].attributes.placeholder.value += text[i];
      i++;
      setTimeout(() => {
        this.writePlaceholder(text, i, e);
      }, 50);
    }
  }
  constructor() {
    this.placeholder = document.getElementsByTagName('input');
  }
  ngOnInit() {
    Object.keys(this.placeholder).forEach(e => {
      var value = this.placeholder[e].attributes.placeholder.value;
      this.placeholder[e].attributes.placeholder.value = '';
      this.writePlaceholder(value, 0, e);
    });

    // console.log(document.getElementById('place').getAttribute('placeholder'));
    // console.log(this.placeholder[0].attributes.placeholder.value);
  }
}
