import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',

})
export class SearchPageComponent implements OnInit {
  selectedHeroControl = new FormControl();
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = this.sortHeroesAlphabetically(heroes);
    });
  }

  sortHeroesAlphabetically(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => a.superhero.localeCompare(b.superhero));
  }
}
