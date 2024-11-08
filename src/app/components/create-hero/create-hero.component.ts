import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create-hero',
  standalone: true,
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateHeroComponent {

  /** Hero name used in input. */
  heroName: string = '';

  /** Hero top flag. */
  heroTop = false;

  /** Contains created heroes. */
  createdHeroes: Hero[] = [];

  /** Flag that indicates if hero name exists. */
  exists = signal(false);

  constructor(private heroService: HeroService) {}

  /**
   * Creates a new hero and clears input.
   */
  create() {
    const hero = this.heroService.createHero(this.heroName, this.heroTop);
    this.createdHeroes.push(hero);
    this.heroName = '';
    this.heroTop = false;
  }

  /**
   * Checks whether hero with provided name exists.
   * @param name - hero name 
   */
  isExisting(name: string) {
    this.exists.set(this.heroService.isHeroExisting(name.trim()));
  }

  /**
   * Checks if hero name is empty.
   * @param name - hero name 
   * @returns 
   */
  isEmpty(name: string): boolean {
    return name.trim() === '';
  }
}
