import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Song } from '@models/song';

@Component({
  selector: 'app-pv-player',
  standalone: true,
  imports: [],
  templateUrl: './pv-player.component.html',
  styleUrl: './pv-player.component.css',
})
export class PvPlayerComponent {
  @Input({ required: true })
  currentSong: Song = null!;

  playVideo() {}
}
