import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from "../hero.service";
import {MassageService} from "../massage.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.massageService.add(`HeroresComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  constructor(private heroService: HeroService, private massageService: MassageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
