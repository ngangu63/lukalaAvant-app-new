import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureTableComponent } from './picture-table.component';

describe('PictureTableComponent', () => {
  let component: PictureTableComponent;
  let fixture: ComponentFixture<PictureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
