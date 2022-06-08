/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Ipoteka } from '../models/ipoteka';

@Injectable({
  providedIn: 'root',
})
export class IpotekaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation ipotekaControllerSendMsgToMail
   */
  static readonly IpotekaControllerSendMsgToMailPath = '/ipoteka/{bank}/{remains}/{insuranceObject}/{propertyHouse}/{name}/{dateBirth}/{phoneNumber}/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendMsgToMail()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendMsgToMail$Response(params: {
    bank: string;
    remains: string;
    insuranceObject: string;
    propertyHouse: string;
    name: string;
    dateBirth: string;
    phoneNumber: string;
    email: string;
  }): Observable<StrictHttpResponse<Ipoteka>> {

    const rb = new RequestBuilder(this.rootUrl, IpotekaControllerService.IpotekaControllerSendMsgToMailPath, 'post');
    if (params) {
      rb.path('bank', params.bank, {});
      rb.path('remains', params.remains, {});
      rb.path('insuranceObject', params.insuranceObject, {});
      rb.path('propertyHouse', params.propertyHouse, {});
      rb.path('name', params.name, {});
      rb.path('dateBirth', params.dateBirth, {});
      rb.path('phoneNumber', params.phoneNumber, {});
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ipoteka>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendMsgToMail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendMsgToMail(params: {
    bank: string;
    remains: string;
    insuranceObject: string;
    propertyHouse: string;
    name: string;
    dateBirth: string;
    phoneNumber: string;
    email: string;
  }): Observable<Ipoteka> {

    return this.sendMsgToMail$Response(params).pipe(
      map((r: StrictHttpResponse<Ipoteka>) => r.body as Ipoteka)
    );
  }

}
