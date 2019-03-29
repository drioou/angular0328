import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { BaidumapsComponent } from './baidumaps/baidumaps.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'star',
    component: StarComponent
  },
  {
    path: 'place',
    component: PlaceholderComponent
  },
  {
    path: 'baidumaps',
    component: BaidumapsComponent
  },
  {
    path: 'map',
    component: MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
