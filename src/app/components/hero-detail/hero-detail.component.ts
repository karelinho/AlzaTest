import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf, UpperCasePipe, Location  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    UpperCasePipe
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {
  hero!: Hero;

  exists = signal(true);

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroService.getHero(id);
  }

  back(): void {
    this.location.back();
  }

  save(value: string): void {
    this.heroService.updateHero(this.hero.id, value);
  }

  delete() {
    this.heroService.deleteHero(this.hero.id);
    this.back();
  }

  isExisting(value: string) {
    this.exists.set(this.heroService.isHeroExisting(value));
  }

  isEmpty(value: string): boolean {
    return value.trim() === '';
  }
}
