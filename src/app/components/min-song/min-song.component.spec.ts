import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinSongComponent } from './min-song.component';

describe('MinSongComponent', () => {
  let component: MinSongComponent;
  let fixture: ComponentFixture<MinSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
