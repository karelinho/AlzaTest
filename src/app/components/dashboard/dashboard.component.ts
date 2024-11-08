import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnDestroy {

  /** Contains all heroes with top property equal to true. */
  public heroes: Hero[] = [];

  private _heroesSubscription: Subscription;

  constructor(private heroService: HeroService) {
    this._heroesSubscription = this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes.filter((heroes: Hero) => {
        return heroes.top;
      })
    });
  }

  ngOnDestroy(): void {
    if (this._heroesSubscription) {
      this._heroesSubscription.unsubscribe();
    }
  }
}
