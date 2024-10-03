import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPagesComponent } from './song-pages.component';

describe('SongPagesComponent', () => {
  let component: SongPagesComponent;
  let fixture: ComponentFixture<SongPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
