import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclIntentionComponent } from './decl-intention.component';

describe('DeclIntentionComponent', () => {
  let component: DeclIntentionComponent;
  let fixture: ComponentFixture<DeclIntentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclIntentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclIntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
