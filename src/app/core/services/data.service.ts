import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IShot } from '../../shared/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  
  constructor(private apiService: ApiService) { }

  fetchShots(): Observable<Array<IShot>> {
    return this.apiService.getShots();
  }
}
