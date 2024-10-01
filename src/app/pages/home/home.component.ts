import { Component } from '@angular/core';
import { LinkComponent } from 'app/components/link/link.component';
import { RecentSongsComponent } from 'app/components/recent-songs/recent-songs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinkComponent, RecentSongsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
