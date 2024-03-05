import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];
  displayedHeroes: Hero[] = [];
  pageSize: number = 8;
  totalHeroes: number = 0;

  constructor( private heroesService: HeroesService ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes;
        this.totalHeroes = this.heroes.length;
        this.onPageChange({ pageIndex: 0, pageSize: this.pageSize } as PageEvent);
      });
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedHeroes = this.heroes.slice(startIndex, endIndex);
  }

}
