/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { IpotekaControllerService } from './services/ipoteka-controller.service';
import { JourneyControllerService } from './services/journey-controller.service';
import { KaskoControllerService } from './services/kasko-controller.service';
import { LegelentityControllerService } from './services/legelentity-controller.service';
import { OsagoControllerService } from './services/osago-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    IpotekaControllerService,
    JourneyControllerService,
    KaskoControllerService,
    LegelentityControllerService,
    OsagoControllerService,
    PingControllerService,
    UserControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
