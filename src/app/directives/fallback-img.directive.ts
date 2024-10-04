import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appFallbackImg]',
  standalone: true,
})
export class FallbackImgDirective {
  @Input()
  fallbackImg?: string;

  @HostListener('error', ['$event'])
  handleImageError(event: Event): void {
    const image = event.target as HTMLInputElement;
    image.src = this.fallbackImg ?? 'placeholder.png';
  }
}
