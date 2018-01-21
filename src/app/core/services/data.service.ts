import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IShot } from '../../shared/models';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class DataService {
  
  public shots: Array<IShot> = null;

  constructor(private apiService: ApiService) { }

  /**
   * Get data from server and store locally
   */
  fetchShots(): Observable<Array<IShot>> {
    return this.apiService.getShots()
      .map( shots => this.shots = shots);
  }

  /**
   * Get a single item
   * @param id Single shot ID
   */
  getShot(id): Observable<IShot> {
    if(this.shots === null) {
      // if shots haven't been got from the server yet then get them
      return this.fetchShots()
      .switchMap( () => {
        // filter out sought after item
        return Observable.of(this.shots.filter( shot => parseInt(id) === shot.id)[0]);
      } );
    }
    else{
      // filter out sought after item
      return Observable.of(this.shots.filter( shot => parseInt(id) === shot.id)[0]);
    }
    
  }

}
