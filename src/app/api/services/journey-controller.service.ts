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
export class JourneyControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation journeyControllerSendMsgToMail
   */
  static readonly JourneyControllerSendMsgToMailPath = '/journey/{countries}/{dateStart}/{dateEnd}/{ageRange}/{citezenship}/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendMsgToMail()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendMsgToMail$Response(params: {
    countries: string;
    dateStart: string;
    dateEnd: string;
    ageRange: string;
    citezenship: string;
    email: string;
  }): Observable<StrictHttpResponse<Ipoteka>> {

    const rb = new RequestBuilder(this.rootUrl, JourneyControllerService.JourneyControllerSendMsgToMailPath, 'post');
    if (params) {
      rb.path('countries', params.countries, {});
      rb.path('dateStart', params.dateStart, {});
      rb.path('dateEnd', params.dateEnd, {});
      rb.path('ageRange', params.ageRange, {});
      rb.path('citezenship', params.citezenship, {});
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
    countries: string;
    dateStart: string;
    dateEnd: string;
    ageRange: string;
    citezenship: string;
    email: string;
  }): Observable<Ipoteka> {

    return this.sendMsgToMail$Response(params).pipe(
      map((r: StrictHttpResponse<Ipoteka>) => r.body as Ipoteka)
    );
  }

}
