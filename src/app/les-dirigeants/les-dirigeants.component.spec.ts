import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesDirigeantsComponent } from './les-dirigeants.component';

describe('LesDirigeantsComponent', () => {
  let component: LesDirigeantsComponent;
  let fixture: ComponentFixture<LesDirigeantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesDirigeantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesDirigeantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
