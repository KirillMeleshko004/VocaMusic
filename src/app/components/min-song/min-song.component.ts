import { Component, HostBinding, input, Input } from '@angular/core';
import { SongForPv } from '@models/songForPv';
import { SongMinInfo } from '@models/songMinInfo';

@Component({
  selector: 'li[app-min-song]',
  standalone: true,
  imports: [],
  templateUrl: './min-song.component.html',
  styleUrl: './min-song.component.css',
})
export class MinSongComponent {
  @Input({ required: true })
  song!: SongMinInfo;

  @Input({ required: true })
  @HostBinding('class.odd')
  isOdd: boolean = true;
}
