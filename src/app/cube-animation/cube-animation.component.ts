import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube-animation',
  templateUrl: './cube-animation.component.html',
  styleUrls: ['./cube-animation.component.scss']
})
export class CubeAnimationComponent implements OnInit {
  constructor() {}
  scroll(): any {
    this.root.setProperty(
      '-scroll',
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  }
  root: any = document.body.style;
  ngOnInit() {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    document.addEventListener('DOMContentLoaded', function() {
      var root: any = document.body.style;

      // Initialize variables
      root.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );

      // Scroll events
      window.addEventListener('scroll', scroll, false);
      function scroll() {
        console.log(
          window.pageYOffset,
          document.body.scrollHeight,
          window.innerHeight
        );
        root.setProperty(
          '--scroll',
          window.pageYOffset / (document.body.scrollHeight - window.innerHeight)
        );
      }
    });
  }
}
