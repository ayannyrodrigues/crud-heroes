import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/models/heroes/hero.model';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 0,
    name: ''
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getListOfHeroes().subscribe(
      hero => this.heroes = hero
    )
  }

  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
  }
}
