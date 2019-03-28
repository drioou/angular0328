import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'star',
    component:StarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
