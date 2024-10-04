import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { SongForPv } from '@models/songForPv';
import { FallbackImgDirective } from 'app/directives/fallback-img.directive';

@Component({
  selector: 'li[app-recent-song]',
  standalone: true,
  imports: [FallbackImgDirective],
  templateUrl: './recent-song.component.html',
  styleUrl: './recent-song.component.css',
})
export class RecentSongComponent {
  @Input({ required: true })
  song: SongForPv = null!;

  @Input()
  last = false;

  @Output()
  onClick = new EventEmitter<SongForPv>();

  @HostListener('click')
  songClick() {
    this.onClick.emit(this.song);
  }
}
