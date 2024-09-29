import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSongsComponent } from './recent-songs.component';

describe('RecentSongsComponent', () => {
  let component: RecentSongsComponent;
  let fixture: ComponentFixture<RecentSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSongsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
