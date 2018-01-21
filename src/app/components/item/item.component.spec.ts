import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { SafePipe } from '../../core/pipes/safe.pipe';
import { Component } from '@angular/core';

//import {Pipe, PipeTransform} from '@angular/core';

// @Pipe({name: 'pipename'})
// class MockPipe implements PipeTransform {
//     transform(value: number): number {
//         //Do stuff here, if you want
//         return value;
//     }
// }

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent, SafePipe ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
