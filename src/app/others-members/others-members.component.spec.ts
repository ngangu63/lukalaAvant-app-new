import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersMembersComponent } from './others-members.component';

describe('OthersMembersComponent', () => {
  let component: OthersMembersComponent;
  let fixture: ComponentFixture<OthersMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
