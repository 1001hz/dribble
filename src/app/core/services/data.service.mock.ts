import { Observable } from 'rxjs/Observable';

export class DataServiceMock {

  public shots = [
    {
      id: 1
    }
  ];

  public fetchShots():any{
    return Observable.of(this.shots);
  }

  public getShot():any{
    return Observable.of(this.shots[0]);
  }
}