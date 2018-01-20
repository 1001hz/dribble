import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShotsResolve, ShotResolve } from './core/resolvers';

import { ListComponent, DetailsComponent } from './components';

let appRoutes = [
  { 
    path: '', 
    component: ListComponent,
    resolve: {
      shots: ShotsResolve
    }
  },
  { 
    path: 'details/:id', 
    component: DetailsComponent,
    resolve: {
      shot: ShotResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: []
})
export class AppRoutingModule { }
