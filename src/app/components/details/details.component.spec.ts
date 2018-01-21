import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../../core/pipes/safe.pipe';
import { DetailsComponent } from './details.component';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ActivatedRoute, Router } from '@angular/router';

export class ActivatedRouteStub {

  private subject = new BehaviorSubject({id: '123'});
  public params = this.subject.asObservable();
}


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let dataFromActivatedRoute = 
  [
    {
      id: 1
    },
    {
      id: 2
    }
  ];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, SafePipe ],
      imports: [
        RouterTestingModule
      ]
    })
    .overrideComponent(DetailsComponent, {
      set: {
        providers: [
          {provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                shots: dataFromActivatedRoute
              }
            }
          }}
        ]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
