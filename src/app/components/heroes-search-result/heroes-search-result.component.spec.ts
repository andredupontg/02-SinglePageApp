import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearchResultComponent } from './heroes-search-result.component';

describe('HeroesSearchResultComponent', () => {
  let component: HeroesSearchResultComponent;
  let fixture: ComponentFixture<HeroesSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
