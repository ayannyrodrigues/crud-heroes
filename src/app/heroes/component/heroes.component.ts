import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
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

  ngOnInit(): void {}

}