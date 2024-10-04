import { AsyncPipe, DatePipe } from '@angular/common';
import {
  Component,
  Input,
  makeStateKey,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import { SongFullInfo } from '@models/songFullInfo';
import { LoadingService } from 'app/services/loading.service';
import { SongsService } from 'app/services/songs/songs.service';
import { Observable, Subscription } from 'rxjs';
import { PvPlayerComponent } from '../../components/pv-player/pv-player.component';

const songKey = makeStateKey<SongFullInfo>('song');

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
    private loadingService: LoadingService,
    private transferState: TransferState
  ) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService.loading$;
    this.loadingService.setLoadingOn();
    this.sub = this.songsService.getSong(this.id).subscribe((song) => {
      setTimeout(() => {
        this.song = song;
        this.loadingService.setLoadingOff();
        this.transferState.set(songKey, song);
      });
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
