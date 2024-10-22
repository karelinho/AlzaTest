import { Injectable } from '@angular/core';
import { Hero } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco', top: true },
    { id: 13, name: 'Bombasto', top: true },
    { id: 14, name: 'Celeritas', top: true },
    { id: 15, name: 'Magneta', top: true },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dyname' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes.filter((hero: Hero) => {
      return hero.id === id;
    })[0];
  }

  updateHero(id: number, value: string) {
    const hero: Hero = this.getHero(id);
    hero.name = value;
  }

  deleteHero(id: number) {
    const index = this.heroes.findIndex((hero) => {
      return hero.id === id;
    });
    this.heroes.splice(index, 1);
  }

  createHero(name: string): Hero {
    const hero = {
      id: this.heroes.slice(-1)[0].id + 1,
      name: name
    };
    this.heroes.push(hero);
    return hero;
  }

  isHeroExisting(name: string) {
    const hero: Hero | undefined = this.heroes.find((hero) => {
      return hero.name === name;
    });
    return hero !== undefined;
  }
}
