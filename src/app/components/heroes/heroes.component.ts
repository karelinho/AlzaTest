import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { CreateHeroComponent } from '../create-hero/create-hero.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    UpperCasePipe,
    NgClass,
    HighlightDirective,
    MatButtonModule,
    CreateHeroComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent {

  /** List of existing heroes. */
  public heroes: Hero[] = [];

  /** Selected hero. */
  public selectedHero!: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  /**
   * Handles hero click.
   * @param hero - hero object
   */
  public handleHeroClick(hero: Hero) {
    this.selectedHero = hero;
  }
}
