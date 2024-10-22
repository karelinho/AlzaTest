import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { NgFor } from '@angular/common';

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
export class DashboardComponent {
  
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes().filter((hero: Hero) => {
      return hero.top;
    });
  }
}
