import { Component, OnInit } from '@angular/core';
import { RecentSongComponent } from '../recent-song/recent-song.component';
import { ButtonComponent } from '../button/button.component';
import { PvPlayerComponent } from '../pv-player/pv-player.component';
import { SongsService } from 'app/services/songs/songs.service';
import { SongForPv } from '@models/songForPv';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from 'app/services/loading.service';

@Component({
  selector: 'article[app-recent-songs]',
  standalone: true,
  imports: [RecentSongComponent, ButtonComponent, PvPlayerComponent, AsyncPipe],
  templateUrl: './recent-songs.component.html',
  styleUrl: './recent-songs.component.css',
})
export class RecentSongsComponent implements OnInit {
  offset$ = new BehaviorSubject(0);
  songs$ = new Observable<SongForPv[]>();
  currentSong: SongForPv | undefined;
  isLoading$!: Observable<boolean>;
  pageSize = 4;

  constructor(
    private songsService: SongsService,
    private loadings: LoadingService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.loadings.loading$;

    this.loadings.setLoadingOn();
    this.songs$ = this.offset$.pipe(
      switchMap((offset) => {
        return this.songsService.getRecentSongsForPv(offset, this.pageSize);
      }),
      scan((acc: SongForPv[], value) => {
        return [...acc, ...value];
      }, []),
      tap((songs) => {
        this.loadings.setLoadingOff();
        if (!this.currentSong) {
          this.currentSong = songs[0];
        }
      })
    );
  }

  setCurrent(e: SongForPv) {
    this.currentSong = e;
  }

  loadMore() {
    this.loadings.setLoadingOn();

    this.offset$.next(this.offset$.getValue() + this.pageSize);
  }
}
