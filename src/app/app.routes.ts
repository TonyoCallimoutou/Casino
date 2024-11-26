import { Routes } from '@angular/router';
import {RoulettePageComponent} from "./page/roulette-page/roulette-page.component";
import {HomePageComponent} from "./page/home-page/home-page.component";
import {AuthPageComponent} from "./page/auth-page/auth-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'roulette/:idTable',
    component: RoulettePageComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  }
];
