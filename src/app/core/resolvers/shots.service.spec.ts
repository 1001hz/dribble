import { TestBed, inject } from '@angular/core/testing';
import { DataService } from '../../core/services/data.service';
import { ShotsResolve } from './shots.service';
import { DataServiceMock } from '../services/data.service.mock';


describe('ShotsResolve', () => {
  var testBedDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotsResolve, { provide: DataService, useClass: DataServiceMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testBedDataService = TestBed.get(DataService);

  });

  it('should be created', inject([ShotsResolve], (service: ShotsResolve) => {
    expect(service).toBeTruthy();
  }));
});
