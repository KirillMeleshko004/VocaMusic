import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  @Input({ required: true })
  placeholder: string = '';
}
