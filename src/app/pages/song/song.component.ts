import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SongFullInfo } from '@models/songFullInfo';
import { LoadingService } from 'app/services/loading.service';
import { SongsService } from 'app/services/songs/songs.service';
import { Observable, Subscription } from 'rxjs';
import { PvPlayerComponent } from '../../components/pv-player/pv-player.component';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [AsyncPipe, PvPlayerComponent, DatePipe],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css',
})
export class SongComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  song: SongFullInfo | undefined;
  sub!: Subscription;
  loading$ = new Observable<boolean>();

  constructor(
    private songsService: SongsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService.loading$;
    this.loadingService.setLoadingOn();
    this.sub = this.songsService.getSong(this.id).subscribe((song) => {
      console.log(song);

      this.song = song;
      this.loadingService.setLoadingOff();
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
