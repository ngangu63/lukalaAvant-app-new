import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport3Component } from './sport3.component';

describe('Sport3Component', () => {
  let component: Sport3Component;
  let fixture: ComponentFixture<Sport3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sport3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
