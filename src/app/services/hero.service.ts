import { Injectable } from '@angular/core';
import { Hero } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /** Array of mocked heroes. */
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

  /**
   * Returns an array of heroes.
   * @returns array of heroes
   */
  getHeroes(): Hero[] {
    return this.heroes;
  }

  /**
   * Returns a hero with provided id.
   * @param id - hero id
   * @returns 
   */
  getHero(id: number): Hero {
    return this.heroes.filter((hero: Hero) => {
      return hero.id === id;
    })[0];
  }

  /**
   * Updates hero name.
   * @param id - hero id
   * @param name - hero name
   */
  updateHero(id: number, name: string) {
    const hero: Hero = this.getHero(id);
    hero.name = name;
  }

  /**
   * Removes hero with provided id from the array of heroes.
   * @param id - hero id
   */
  deleteHero(id: number) {
    const index = this.heroes.findIndex((hero) => {
      return hero.id === id;
    });
    this.heroes.splice(index, 1);
  }

  /**
   * Creates a new hero with provided name and adds it under the last hero id + 1 to the array of heroes.
   * @param name - hero name
   * @returns 
   */
  createHero(name: string): Hero {
    const hero = {
      id: (this.heroes.length > 0) ? (this.heroes.slice(-1)[0].id + 1) : 1,
      name: name
    };
    this.heroes.push(hero);
    return hero;
  }

  /**
   * Chacks whether hero with given name already exists.
   * @param name - hero name
   * @returns 
   */
  isHeroExisting(name: string) {
    const hero: Hero | undefined = this.heroes.find((hero) => {
      return hero.name === name;
    });
    return hero !== undefined;
  }
}
