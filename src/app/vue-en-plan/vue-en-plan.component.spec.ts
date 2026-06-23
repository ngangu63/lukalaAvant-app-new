import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueEnPlanComponent } from './vue-en-plan.component';

describe('VueEnPlanComponent', () => {
  let component: VueEnPlanComponent;
  let fixture: ComponentFixture<VueEnPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueEnPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VueEnPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
