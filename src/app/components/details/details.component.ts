import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShot } from '../../shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public shot: IShot;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.shot = this.route.snapshot.data['shot'];
  }

}
