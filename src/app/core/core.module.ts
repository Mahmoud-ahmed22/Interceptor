import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { httpInterceptorProvider } from './interceptors';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    httpInterceptorProvider
  ],
})
export class CoreModule { }
