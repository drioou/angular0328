import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spiraling',
  templateUrl: './spiraling.component.html',
  styleUrls: ['./spiraling.component.scss']
})
export class SpiralingComponent implements OnInit {
  constructor() {}
  @ViewChild('a') a: ElementRef;
  @ViewChild('b') b: ElementRef;

  ngOnInit() {}
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    let canvas = this.a.nativeElement;
    let ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const { sin, cos, PI, sqrt } = Math;

    const PI2 = PI * 2;
    const SCALE = 1;
    const radius = x => Math.pow(x, 3);
    const NUM = 10;
    let t = 1;
    let t2 = 0;
    let amount = 1;

    function loop() {
      ctx.clearRect(0, 0, w, h);
      ctx.translate(w / 2, h / 2);

      for (let r = 0; SCALE * radius(r) < (w + h) / 2; r++) {
        let rad = SCALE * radius(r + t + t2);
        for (let i = 0; i < NUM; i++) {
          let a = (PI2 * (i + t)) / NUM;
          let x = rad * cos(a);
          let y = rad * sin(a);
          ctx.beginPath();
          ctx.arc(x, y, 0.2 * (r + t + t2) * (r + t + t2), 0, PI2);
          ctx.fill();
        }
        rad = SCALE * radius(r + t + t2 + 0.5);
        for (let i = 0.5; i < NUM; i++) {
          let a = (PI2 * (i - t)) / NUM;
          let x = rad * cos(a);
          let y = rad * sin(a);
          ctx.beginPath();
          ctx.arc(x, y, 0.2 * (r + t + t2 + 0.5) * (r + t + t2 + 0.5), 0, PI2);
          ctx.fill();
        }
      }
      t -= 0.01 * amount;
      if (t <= 0) t += 1;
      ctx.translate(-w / 2, -h / 2);
      requestAnimationFrame(loop);
    }

    ctx.fillStyle = '#595';
    loop();
    const b = this.b.nativeElement;
   

    window.onclick = function(e) {
      amount = amount == 0 ? 1 : 0;
    };
  }
}
