import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form[app-searchbar]',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  @Input({ required: true })
  placeholder: string = '';

  inputValue: string = '';

  @Output()
  queryChanged = new EventEmitter<string>();

  onChange() {
    this.queryChanged.emit(this.inputValue);
  }

  onClear() {
    if (this.inputValue === '') return;
    this.inputValue = '';
    this.queryChanged.emit(this.inputValue);
  }

  @HostListener('submit', ['$event'])
  onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
