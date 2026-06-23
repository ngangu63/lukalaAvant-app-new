import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMp4Component } from './image-mp4.component';

describe('ImageMp4Component', () => {
  let component: ImageMp4Component;
  let fixture: ComponentFixture<ImageMp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMp4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageMp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
