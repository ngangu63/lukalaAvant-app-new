import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViabiliteComponent } from './viabilite.component';

describe('ViabiliteComponent', () => {
  let component: ViabiliteComponent;
  let fixture: ComponentFixture<ViabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
