import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukalaSamuseComponent } from './lukala-samuse.component';

describe('LukalaSamuseComponent', () => {
  let component: LukalaSamuseComponent;
  let fixture: ComponentFixture<LukalaSamuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LukalaSamuseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LukalaSamuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
