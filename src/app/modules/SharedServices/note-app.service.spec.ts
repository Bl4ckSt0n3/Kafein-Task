import { TestBed } from '@angular/core/testing';

import { NoteAppService } from './note-app.service';

describe('NoteAppService', () => {
  let service: NoteAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
