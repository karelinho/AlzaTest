import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';

export const routes: Routes = [
    { path: '', redirectTo:'/heroes', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', loadComponent: () => import("./components/hero-detail/hero-detail.component").then((m) => m.HeroDetailComponent) },
    { path: 'create-hero', component: CreateHeroComponent}
];
