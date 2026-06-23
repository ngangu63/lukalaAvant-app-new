import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActOfNotaryComponent } from './act-of-notary.component';

describe('ActOfNotaryComponent', () => {
  let component: ActOfNotaryComponent;
  let fixture: ComponentFixture<ActOfNotaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActOfNotaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActOfNotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
