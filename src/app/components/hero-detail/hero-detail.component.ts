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

  /** Contains selected hero. */
  hero!: Hero;

  /** Flag that indicates if hero name exists. */
  exists = signal(true);

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.getHero();
  }
  
  /**
   * Fills hero with id obtained from url.
   */
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroService.getHero(id);
  }

  /**
   * Navigates to previous screen.
   */
  back(): void {
    this.location.back();
  }

  /**
   * Updates selected hero name.
   * @param name - hero name
   */
  save(name: string): void {
    this.heroService.updateHero(this.hero.id, name);
    this.exists.set(true);
  }

  /**
   * Removes selected hero and navigates to previous screen.
   */
  delete() {
    this.heroService.deleteHero(this.hero.id);
    this.back();
  }

  /**
   * Checks whether hero with provided name exists.
   * @param name - hero name 
   */
  isExisting(name: string) {
    this.exists.set(this.heroService.isHeroExisting(name.trim()));
  }

  /**
   * Checks whether the hero name is empty.
   * @param name - hero name
   * @returns 
   */
  isEmpty(name: string): boolean {
    return name.trim() === '';
  }
}
