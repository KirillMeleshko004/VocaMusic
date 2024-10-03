import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QueryArgs } from '@models/queryArgs';
import { SongMinInfo } from '@models/songMinInfo';
import { MinSongComponent } from 'app/components/min-song/min-song.component';
import { SearchbarComponent } from 'app/components/searchbar/searchbar.component';
import { SelectComponent } from 'app/components/select/select.component';
import { SongPagesComponent } from 'app/components/song-pages/song-pages.component';
import { LoadingService } from 'app/services/loading.service';
import { SongsService } from 'app/services/songs/songs.service';
import {
  BehaviorSubject,
  catchError,
  map,
  mergeMap,
  Observable,
  scan,
  switchMap,
  tap,
} from 'rxjs';

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
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
})
export class SongsComponent implements OnInit {
  pageSize = 10;
  totalCount = 0;
  totalPages = 0;

  params$ = new BehaviorSubject<QueryArgs>({
    query: '',
    orderBy: 'RatingScore',
    page: 1,
    pageSize: this.pageSize,
  });

  songs$ = new Observable<SongMinInfo[]>();

  loadings$ = new Observable<boolean>();

  constructor(
    private songsService: SongsService,
    private loadings: LoadingService
  ) {
    this.loadings$ = loadings.loading$;
  }

  ngOnInit(): void {
    this.loadings.setLoadingOn();
    this.songs$ = this.params$.pipe(
      switchMap((params) => {
        return this.songsService.getMinSongs(params);
      }),
      map((data) => {
        this.totalCount = data.totalCount;
        this.totalPages = Math.ceil(this.totalCount / this.pageSize);

        this.loadings.setLoadingOff();
        return data.songs;
      })
    );
  }

  pageChanged(pageNumber: number) {
    this.loadings.setLoadingOn();
    this.params$.next({
      ...this.params$.getValue(),
      page: pageNumber,
    });
  }

  onQueryChangde(query: string) {
    this.loadings.setLoadingOn();
    this.params$.next({
      ...this.params$.getValue(),
      page: 1,
      query: query,
    });
  }

  onSelect(event: Event) {
    const target = event.target as any;

    if (target['value']) {
      this.loadings.setLoadingOn();
      this.params$.next({
        ...this.params$.getValue(),
        page: 1,
        orderBy: target.value,
      });
    }
  }
}
