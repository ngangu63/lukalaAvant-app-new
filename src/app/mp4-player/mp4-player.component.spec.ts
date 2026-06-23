import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp4PlayerComponent } from './mp4-player.component';

describe('Mp4PlayerComponent', () => {
  let component: Mp4PlayerComponent;
  let fixture: ComponentFixture<Mp4PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mp4PlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mp4PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
