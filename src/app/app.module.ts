import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BaiduMapModule } from 'angular2-baidu-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { BaidumapsComponent } from './baidumaps/baidumaps.component';
import { MapsComponent } from './maps/maps.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { MenuComponent } from './menu/menu.component';
import { SpiralingComponent } from './spiraling/spiraling.component';
import { SvsArrowComponent } from './svs-arrow/svs-arrow.component';
import { CubeAnimationComponent } from './cube-animation/cube-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarComponent,
    PlaceholderComponent,
    BaidumapsComponent,
    MapsComponent,
    RangeSliderComponent,
    MenuComponent,
    SpiralingComponent,
    SvsArrowComponent,
    CubeAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BaiduMapModule.forRoot({ ak: 'Wk5ZhRGh5b5FjsVzf2LQex4v' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
