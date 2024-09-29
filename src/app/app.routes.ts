import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HOME, SONGS } from '@constants/routesPath';

export const routes: Routes = [
  {
    title: HOME.title,
    path: HOME.URI,
    component: HomeComponent,
  },
  {
    title: SONGS.title,
    path: SONGS.URI,
    component: SongsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
