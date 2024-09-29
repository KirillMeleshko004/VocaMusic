import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  imports: [LogoComponent, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
