import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListComponent } from './list.component';
import { ActivatedRoute } from '@angular/router';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
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
      declarations: [ ListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .overrideComponent(ListComponent, {
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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate shots local var', () => {
    expect(component.shots).toEqual(dataFromActivatedRoute);
  });
});
