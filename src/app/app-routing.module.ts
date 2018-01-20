import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShotsResolve } from './core/resolvers';

import { ListComponent, DetailsComponent } from './components';

let appRoutes = [
  { 
    path: '', 
    component: ListComponent,
    resolve: {
      shots: ShotsResolve
    }
  },
  { path: 'details/:id', component: DetailsComponent}
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
