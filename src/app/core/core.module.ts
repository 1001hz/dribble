import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe'
import { ApiService, DataService } from './services';
import { ShotsResolve, ShotResolve } from './resolvers';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafePipe
  ],
  exports: [
    SafePipe
  ],
  providers: [
    ApiService,
    DataService,
    ShotsResolve,
    ShotResolve
  ]
})
export class CoreModule {

  // stop this module loading more than once to prevent multiple
  // instances of the services getting created
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}