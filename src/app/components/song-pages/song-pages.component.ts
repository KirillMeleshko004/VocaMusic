import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-song-pages',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './song-pages.component.html',
  styleUrl: './song-pages.component.css',
})
export class SongPagesComponent {
  @Input({ required: true })
  currentPage = 1;
  @Input({ required: true })
  totalItems = 1;

  maxPages = 9;
  pageNumers = [...Array(5).keys()];
}
