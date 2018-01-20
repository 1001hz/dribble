import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService, DataService } from './services';
import { ShotsResolve } from './resolvers';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    DataService,
    ShotsResolve
  ]
})
export class CoreModule { }
