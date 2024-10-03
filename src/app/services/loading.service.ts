import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject(false);

  loading$ = this.loadingSubject.asObservable();

  setLoadingOn() {
    this.loadingSubject.next(true);
  }

  setLoadingOff() {
    this.loadingSubject.next(false);
  }
}
