import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME, SONGS } from '@constants/routesPath';
import { LinkComponent } from 'app/component/link/link.component';

@Component({
  selector: 'nav[header]',
  standalone: true,
  imports: [RouterLink, LinkComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  links = [HOME, SONGS];
}
