import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HOME, SONG, SONGS } from '@constants/routesPath';
import { SongComponent } from './pages/song/song.component';

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
    title: SONG.title,
    path: SONG.URI,
    component: SongComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
