import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HomeComponent} from "./components/home/home.component";
import {HeroComponent} from "./components/hero/hero.component";

const routes: Routes = [
  {path: "about", component:AboutComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "hero/:id", component: HeroComponent},
  {path: "home", component: HomeComponent},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
