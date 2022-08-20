import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number | undefined;

  @Output() heroSelected: EventEmitter<number> = new EventEmitter;

  constructor() {
    this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHero(){
    this.heroSelected.emit(this.index);
  }
}
