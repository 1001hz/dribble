import { SafePipe } from './safe.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer} from '@angular/platform-browser';

describe('SafePipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SafePipe,
        { provide: DomSanitizer, useClass: DomSanitizer }
      ]
    });
  });

  it('should be created', inject([SafePipe], (safe: SafePipe) => {
    expect(safe).toBeTruthy();
  }));
  
});