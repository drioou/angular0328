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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarComponent,
    PlaceholderComponent,
    BaidumapsComponent,
    MapsComponent
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
