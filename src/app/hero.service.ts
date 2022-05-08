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

  constructor(private massageService: MassageService) { }
}
