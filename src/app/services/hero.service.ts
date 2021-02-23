import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../Interface/hero';
import { HEROES } from '../mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }
}
