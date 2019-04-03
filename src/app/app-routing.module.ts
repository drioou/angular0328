import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '正方形动画'
    }
  },
  {
    path: 'cube',
    component: CubeAnimationComponent,
    data: {
      title: 'Bind CSS keyframe animation to scroll'
    }
  },
  {
    path: 'svgArrow',
    component: SvsArrowComponent,
    data: {
      title: '箭头动画'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '正方形动画'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '正方形动画'
    }
  },
  {
    path: 'spiraling',
    component: SpiralingComponent,
    data: {
      title: 'spiraling animation'
    }
  },
  {
    path: 'star',
    component: StarComponent,
    data: {
      title: '滚动的星星'
    }
  },
  {
    path: 'place',
    component: PlaceholderComponent,
    data: {
      title: 'placehoder 动画'
    }
  },
  {
    path: 'baidumaps',
    component: BaidumapsComponent,
    data: {
      title: '地图'
    }
  },
  {
    path: 'map',
    component: MapsComponent,
    data: {
      title: '地图'
    }
  },
  {
    path: 'range',
    component: RangeSliderComponent,
    data: {
      title: 'range 修改'
    }
  },
  // {
  //   path: '**',
  //   redirectTo: '/',
  //   pathMatch: 'full',
  //   data: {
  //     title: '404'
  //   }
  // },
  {
    path: '**',
    component: MenuComponent,
    data: {
      title: '目录'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
