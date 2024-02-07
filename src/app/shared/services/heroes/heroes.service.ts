import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../models/heroes/hero.model';
import { HEROES } from '../../mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  getListOfHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
