import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Song } from '@models/song';
@Component({
  selector: 'li[app-recent-song]',
  standalone: true,
  imports: [],
  templateUrl: './recent-song.component.html',
  styleUrl: './recent-song.component.css',
})
export class RecentSongComponent {
  @Input({ required: true })
  song: Song = null!;

  @Output()
  onClick = new EventEmitter<Song>();

  @HostListener('click')
  songClick() {
    this.onClick.emit(this.song);
  }
}
