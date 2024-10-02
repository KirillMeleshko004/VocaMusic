import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IMAGE_PLACEHOLDER } from '@constants/defaults';
import { SongForPv } from '@models/songForPv';
@Component({
  selector: 'app-pv-player',
  standalone: true,
  imports: [],
  templateUrl: './pv-player.component.html',
  styleUrl: './pv-player.component.css',
})
export class PvPlayerComponent implements OnChanges {
  @Input({ required: true })
  currentSong: SongForPv | undefined;

  safePvURI: SafeResourceUrl;

  placeholder = IMAGE_PLACEHOLDER;

  isPlaying: boolean = false;

  loaded: boolean = false;

  playPv() {
    this.isPlaying = true;
  }

  constructor(private _sanitizer: DomSanitizer) {
    this.safePvURI = this._sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentSong'] && changes['currentSong'].currentValue) {
      this.isPlaying = false;

      if (this.currentSong) {
        this.safePvURI = this._sanitizer.bypassSecurityTrustResourceUrl(
          this.currentSong.ytPvEmbedUrl
        );
      }

      this.loaded = true;
    }
  }
}
