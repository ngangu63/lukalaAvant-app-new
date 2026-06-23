import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriPiloteComponent } from './agri-pilote.component';

describe('AgriPiloteComponent', () => {
  let component: AgriPiloteComponent;
  let fixture: ComponentFixture<AgriPiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriPiloteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
