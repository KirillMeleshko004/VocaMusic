import { Component } from '@angular/core';
import { RecentSongComponent } from '../recent-song/recent-song.component';
import { SongTypes } from 'utils/enums/songs/songTypes';
import { Song } from '@models/song';
import { ButtonComponent } from '../button/button.component';
import { PvPlayerComponent } from '../pv-player/pv-player.component';
@Component({
  selector: 'article[app-recent-songs]',
  standalone: true,
  imports: [
    RecentSongsComponent,
    RecentSongComponent,
    ButtonComponent,
    PvPlayerComponent,
  ],
  templateUrl: './recent-songs.component.html',
  styleUrl: './recent-songs.component.css',
})
export class RecentSongsComponent {
  songs: Song[];

  currentSong: Song;

  constructor() {
    this.songs = [
      {
        id: 1,
        name: 'Rolling Girl',
        publishDate: '25.01.2004',
        length: 180,
        songType: SongTypes.Original,
        additionalNames: null,
        artistString: 'wowaka feat. Hatsune Miku',
        image: 'test.jpg',
        pvUrl: 'https://youtu.be/QEoa9a06Pxs?si=Buj_ePRV-2qMBgwf',
      },
      {
        id: 2,
        name: 'Rolling Girl 2',
        publishDate: '25.01.2004',
        length: 180,
        songType: SongTypes.Original,
        additionalNames: null,
        artistString: 'wowaka feat. Hatsune Miku',
        image: 'test.jpg',
        pvUrl: 'https://youtu.be/QEoa9a06Pxs?si=Buj_ePRV-2qMBgwf',
      },
      {
        id: 3,
        name: 'Rolling Girl 3',
        publishDate: '25.01.2004',
        length: 180,
        songType: SongTypes.Original,
        additionalNames: null,
        artistString: 'wowaka feat. Hatsune Miku',
        image: 'test.jpg',
        pvUrl: 'https://youtu.be/QEoa9a06Pxs?si=Buj_ePRV-2qMBgwf',
      },
      {
        id: 4,
        name: 'Rolling Girl 4',
        publishDate: '25.01.2004',
        length: 180,
        songType: SongTypes.Original,
        additionalNames: null,
        artistString: 'wowaka feat. Hatsune Miku',
        image: 'test.jpg',
        pvUrl: 'https://youtu.be/QEoa9a06Pxs?si=Buj_ePRV-2qMBgwf',
      },
    ];

    this.currentSong = this.songs[0];
  }

  setCurrent(e: Song) {
    this.currentSong = e;
  }

  loadMore() {
    this.songs = [...this.songs, ...this.songs];
  }
}
