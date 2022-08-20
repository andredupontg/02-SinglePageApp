import { Component, OnInit } from '@angular/core';
import {Hero, HeroesService} from 'src/app/services/heroes.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroes-search-result',
  templateUrl: './heroes-search-result.component.html',
  styleUrls: ['./heroes-search-result.component.css']
})
export class HeroesSearchResultComponent implements OnInit {

  heroesArray: Hero[] = [];
  searchStr: string = "";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {this.searchStr = params['heroName'];});
    this.heroesArray = this._heroesService.searchHeroes(this.searchStr);
  }

  showHero(index: number){
    this.router.navigate(['/hero', index]);
  }
}
