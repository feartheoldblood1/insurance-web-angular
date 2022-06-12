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
export class LegelentityControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation legelentityControllerSendMsgToMail
   */
  static readonly LegelentityControllerSendMsgToMailPath = '/legalentity/{companyName}/{addres}/{INN}/{region}/{surname}/{name}/{otchestvo}/{email}/{phone}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendMsgToMail()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendMsgToMail$Response(params: {
    companyName: string;
    addres: string;
    INN: string;
    region: string;
    surname: string;
    name: string;
    otchestvo: string;
    email: string;
    phone: string;
  }): Observable<StrictHttpResponse<Ipoteka>> {

    const rb = new RequestBuilder(this.rootUrl, LegelentityControllerService.LegelentityControllerSendMsgToMailPath, 'post');
    if (params) {
      rb.path('companyName', params.companyName, {});
      rb.path('addres', params.addres, {});
      rb.path('INN', params.INN, {});
      rb.path('region', params.region, {});
      rb.path('surname', params.surname, {});
      rb.path('name', params.name, {});
      rb.path('otchestvo', params.otchestvo, {});
      rb.path('email', params.email, {});
      rb.path('phone', params.phone, {});
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
    companyName: string;
    addres: string;
    INN: string;
    region: string;
    surname: string;
    name: string;
    otchestvo: string;
    email: string;
    phone: string;
  }): Observable<Ipoteka> {

    return this.sendMsgToMail$Response(params).pipe(
      map((r: StrictHttpResponse<Ipoteka>) => r.body as Ipoteka)
    );
  }

}
