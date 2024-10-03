import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { LoadingService } from 'app/services/loading.service';
import { Observable, Subject, Subscription, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  imports: [LogoComponent, HeaderNavComponent, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loading$ = new Observable<boolean>();

  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {
    this.loading$ = this.loadingService.loading$;
  }
}
