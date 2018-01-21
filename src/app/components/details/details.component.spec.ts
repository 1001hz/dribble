import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../../core/pipes/safe.pipe';
import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let dataFromActivatedRoute = {
    id: 1,
    user: {
      name: ''
    },
    images: ''
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, SafePipe ]
    })
    .overrideComponent(DetailsComponent, {
      set: {
        providers: [
          {provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                shot: dataFromActivatedRoute
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate shots local var', () => {
    expect(component.shot).toEqual(dataFromActivatedRoute);
  });

});
