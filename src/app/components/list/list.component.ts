import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShot } from '../../shared/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public shots: Array<IShot>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.shots = this.route.snapshot.data['shots'];
  }

}
