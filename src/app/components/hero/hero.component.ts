import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => {this.hero = this._heroesService.getHero(params['id']);});
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/heroes']);
  }
}
