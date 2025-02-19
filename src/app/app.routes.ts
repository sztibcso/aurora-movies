import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DontClickComponent } from './dont-click/dont-click-component';

export const appRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'dont-click', component: DontClickComponent }
];

