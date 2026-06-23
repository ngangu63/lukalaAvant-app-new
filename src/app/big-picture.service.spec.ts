import { TestBed } from '@angular/core/testing';

import { BigPictureService } from './big-picture.service';

describe('BigPictureService', () => {
  let service: BigPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
