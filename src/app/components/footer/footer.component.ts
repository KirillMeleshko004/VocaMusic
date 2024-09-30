import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LinkComponent } from 'app/component/link/link.component';

@Component({
  selector: 'footer[app-footer]',
  standalone: true,
  imports: [LogoComponent, LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
