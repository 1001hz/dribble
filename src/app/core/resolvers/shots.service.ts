import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services';
import { IShot } from '../../shared/models';

@Injectable()
export class ShotsResolve implements Resolve<Observable<Array<IShot>>> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.fetchShots();
  }

}
