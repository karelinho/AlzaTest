import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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

  heroName: string = '';

  createdHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  create() {
    const hero = this.heroService.createHero(this.heroName);
    this.createdHeroes.push(hero);
    this.heroName = '';
  }

  isEmpty(value: string): boolean {
    return value.trim() === '';
  }
}
