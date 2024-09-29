import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '/songs',
    component: SongsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
