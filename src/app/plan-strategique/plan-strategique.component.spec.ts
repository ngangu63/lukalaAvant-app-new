import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStrategiqueComponent } from './plan-strategique.component';

describe('PlanStrategiqueComponent', () => {
  let component: PlanStrategiqueComponent;
  let fixture: ComponentFixture<PlanStrategiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanStrategiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanStrategiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
