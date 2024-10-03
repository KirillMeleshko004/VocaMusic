import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-song-pages',
  standalone: true,
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './song-pages.component.html',
  styleUrl: './song-pages.component.css',
})
export class SongPagesComponent implements OnChanges {
  maxPagesOffset = 4;
  pageNumers: number[] = [];

  @Input({ required: true })
  currentPage = 0;
  @Input({ required: true })
  totalPages = 0;

  @Input({ required: true })
  isLoading: boolean = false;

  @Output() pageChanged = new EventEmitter<number>();

  onPageChanged(page: number) {
    this.pageChanged.emit(page);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['currentPage'] && this.totalPages) || changes['totalPages']) {
      const pagesArr: number[] = [];
      for (
        let i = this.currentPage - this.maxPagesOffset;
        i <= this.currentPage + this.maxPagesOffset;
        i++
      ) {
        if (i <= 0 || i > this.totalPages) continue;

        pagesArr.push(i);
      }

      this.pageNumers = pagesArr;
    }
  }
}
