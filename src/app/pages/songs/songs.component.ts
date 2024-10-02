import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SongForPv } from '@models/songForPv';
import { SongMinInfo } from '@models/songMinInfo';
import { MinSongComponent } from 'app/components/min-song/min-song.component';
import { SearchbarComponent } from 'app/components/searchbar/searchbar.component';
import { SelectComponent } from 'app/components/select/select.component';
import { SongPagesComponent } from 'app/components/song-pages/song-pages.component';
import { SongsService } from 'app/services/songs/songs.service';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [
    SearchbarComponent,
    SelectComponent,
    SongPagesComponent,
    AsyncPipe,
    MinSongComponent,
  ],
  providers: [SongsService],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
})
export class SongsComponent implements OnInit {
  page = new BehaviorSubject(1);
  songs = new Observable<SongMinInfo[]>();
  isLoading = true;
  pageSize = 15;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songs = this.page.pipe(
      switchMap((page) => {
        return this.songsService.getMinSongs(
          'none',
          '',
          page - 1,
          this.pageSize
        );
      }),
      scan((acc: SongMinInfo[], value) => {
        return [...acc, ...value];
      }, [])
    );
  }
}
