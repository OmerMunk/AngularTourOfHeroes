import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MassageService} from "./massage.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.massageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.massageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private massageService: MassageService) { }
}
