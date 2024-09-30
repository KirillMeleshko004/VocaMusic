import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvPlayerComponent } from './pv-player.component';

describe('PvPlayerComponent', () => {
  let component: PvPlayerComponent;
  let fixture: ComponentFixture<PvPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
