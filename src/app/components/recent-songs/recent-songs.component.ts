import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecentSongComponent } from '../recent-song/recent-song.component';
import { ButtonComponent } from '../button/button.component';
import { PvPlayerComponent } from '../pv-player/pv-player.component';
import { SongsService } from 'app/services/songs/songs.service';
import { SongForPv } from '@models/songForPv';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'article[app-recent-songs]',
  standalone: true,
  imports: [RecentSongComponent, ButtonComponent, PvPlayerComponent, AsyncPipe],
  providers: [SongsService],
  templateUrl: './recent-songs.component.html',
  styleUrl: './recent-songs.component.css',
})
export class RecentSongsComponent implements OnInit {
  offset = new BehaviorSubject(0);
  songs = new Observable<SongForPv[]>();
  currentSong: SongForPv | undefined;
  isLoading = true;
  pageSize = 4;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songs = this.offset.pipe(
      switchMap((offset) => {
        return this.songsService.getRecentSongsForPv(offset, this.pageSize);
      }),
      scan((acc: SongForPv[], value) => {
        return [...acc, ...value];
      }, []),
      tap((songs) => {
        this.isLoading = false;
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
    this.isLoading = true;

    this.offset.next(this.offset.getValue() + this.pageSize);
  }
}
