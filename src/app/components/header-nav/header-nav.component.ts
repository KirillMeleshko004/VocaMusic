import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME, SONGS } from '@constants/routesPath';

@Component({
  selector: 'nav[header]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  links = [HOME, SONGS];
}
