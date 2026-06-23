import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeProjectComponent } from './fiche-de-project.component';

describe('FicheDeProjectComponent', () => {
  let component: FicheDeProjectComponent;
  let fixture: ComponentFixture<FicheDeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheDeProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheDeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
