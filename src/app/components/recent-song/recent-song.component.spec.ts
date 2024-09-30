import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSongComponent } from './recent-song.component';

describe('RecentSongComponent', () => {
  let component: RecentSongComponent;
  let fixture: ComponentFixture<RecentSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
