import { Component, OnInit } from '@angular/core';
import { Hero } from './../Interface/hero';
import { HEROES } from '../mock/mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'WindStorm'
  // }

  // heroes = HEROES;

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Synchronous, without observable
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // Asynchronous, with Observable
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
