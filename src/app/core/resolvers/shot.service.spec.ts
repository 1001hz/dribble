import { TestBed, inject } from '@angular/core/testing';
import { DataServiceMock } from '../services/data.service.mock';
import { DataService } from '../../core/services/data.service';
import { ShotResolve } from './shot.service';
import { Observable } from 'rxjs/Observable';

describe('ShotResolve', () => {
  let dataServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotResolve, { provide: DataService, useClass: DataServiceMock }]
    });
  });

  it('should be created', inject([ShotResolve], (shotResolve: ShotResolve) => {
    expect(shotResolve).toBeTruthy();
  }));
});
