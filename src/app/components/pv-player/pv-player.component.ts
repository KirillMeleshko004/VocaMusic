import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { IMAGE_PLACEHOLDER } from '@constants/defaults';
import { SongForPv } from '@models/songForPv';
import { FallbackImgDirective } from 'app/directives/fallback-img.directive';
@Component({
  selector: 'app-pv-player',
  standalone: true,
  imports: [FallbackImgDirective],
  templateUrl: './pv-player.component.html',
  styleUrl: './pv-player.component.css',
})
export class PvPlayerComponent implements OnChanges {
  @Input({ required: true })
  currentSong: SongForPv | undefined;

  placeholder = IMAGE_PLACEHOLDER;

  isPlaying: boolean = false;

  loaded: boolean = false;

  private readonly platform = inject(PLATFORM_ID);

  @ViewChild('iframe') ytFrame!: ElementRef;

  playPv() {
    this.isPlaying = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['currentSong'] &&
      changes['currentSong'].currentValue &&
      isPlatformBrowser(this.platform)
    ) {
      this.isPlaying = false;

      if (this.currentSong) {
        this.ytFrame?.nativeElement.contentWindow.location.replace(
          this.currentSong.ytPvEmbedUrl
        );
      }

      this.loaded = true;
    }
  }
}
