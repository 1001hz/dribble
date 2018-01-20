import { Component, OnInit, Input } from '@angular/core';
import { IShot } from '../../shared/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IShot;

  constructor() { }

  ngOnInit() {
    
  }

}
