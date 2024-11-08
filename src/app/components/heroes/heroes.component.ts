import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { CreateHeroComponent } from '../create-hero/create-hero.component';
import { Subscription } from 'rxjs';

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
export class HeroesComponent implements OnDestroy {

  /** List of existing heroes. */
  public heroes: Hero[] = [];

  /** Selected hero. */
  public selectedHero!: Hero;

  private _heroesSubscription: Subscription;

  constructor(private heroService: HeroService) {
    this._heroesSubscription = this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  /**
   * Handles hero click.
   * @param hero - hero object
  */
  public handleHeroClick(hero: Hero) {
   this.selectedHero = hero;
  }

  ngOnDestroy(): void {
    if (this._heroesSubscription) {
      this._heroesSubscription.unsubscribe();
    }
  }
}
