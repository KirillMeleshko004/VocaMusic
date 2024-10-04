import { Component, HostBinding, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SongMinInfo } from '@models/songMinInfo';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'li[app-min-song]',
  standalone: true,
  imports: [RouterLink, LinkComponent],
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
