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

import { User } from '../models/user';
import { UserPartial } from '../models/user-partial';
import { UserWithRelations } from '../models/user-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userControllerCount
   */
  static readonly UserControllerCountPath = '/users/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerCountPath, 'get');
    if (params) {
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(params?: {
    where?: any;
  }): Observable<LoopbackCount> {

    return this.count$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation userControllerCreate
   */
  static readonly UserControllerCreatePath = '/users/{mail}/{phone_number}/{password}/{surname}/{name}/{otchestvo}/{datebirth}/{foreigner}/{document}/{document_number}/{document_series}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method doesn't expect any request body.
   */
  create$Response(params: {
    mail: string;
    phone_number: string;
    password: string;
    surname: string;
    name: string;
    otchestvo: string;
    datebirth: string;
    foreigner: string;
    document: string;
    document_number: string;
    document_series: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerCreatePath, 'post');
    if (params) {
      rb.path('mail', params.mail, {});
      rb.path('phone_number', params.phone_number, {});
      rb.path('password', params.password, {});
      rb.path('surname', params.surname, {});
      rb.path('name', params.name, {});
      rb.path('otchestvo', params.otchestvo, {});
      rb.path('datebirth', params.datebirth, {});
      rb.path('foreigner', params.foreigner, {});
      rb.path('document', params.document, {});
      rb.path('document_number', params.document_number, {});
      rb.path('document_series', params.document_series, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  create(params: {
    mail: string;
    phone_number: string;
    password: string;
    surname: string;
    name: string;
    otchestvo: string;
    datebirth: string;
    foreigner: string;
    document: string;
    document_number: string;
    document_series: string;
  }): Observable<User> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation userControllerFindByNamePass
   */
  static readonly UserControllerFindByNamePassPath = '/users/{email}/{password}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNamePass()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNamePass$Response(params: {
    email: string;
    password: string;
  }): Observable<StrictHttpResponse<Array<UserWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerFindByNamePassPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findByNamePass$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNamePass(params: {
    email: string;
    password: string;
  }): Observable<Array<UserWithRelations>> {

    return this.findByNamePass$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserWithRelations>>) => r.body as Array<UserWithRelations>)
    );
  }

  /**
   * Path part for operation userControllerFindById
   */
  static readonly UserControllerFindByIdPath = '/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: number;
    filter?: any;
  }): Observable<StrictHttpResponse<UserWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserWithRelations>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: number;
    filter?: any;
  }): Observable<UserWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<UserWithRelations>) => r.body as UserWithRelations)
    );
  }

  /**
   * Path part for operation userControllerReplaceById
   */
  static readonly UserControllerReplaceByIdPath = '/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: number;
    body?: User
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerReplaceByIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(params: {
    id: number;
    body?: User
  }): Observable<any> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation userControllerDeleteById
   */
  static readonly UserControllerDeleteByIdPath = '/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    id: number;
  }): Observable<any> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation userControllerUpdateById
   */
  static readonly UserControllerUpdateByIdPath = '/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: number;
    body?: UserPartial
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerUpdateByIdPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(params: {
    id: number;
    body?: UserPartial
  }): Observable<any> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation userControllerFind
   */
  static readonly UserControllerFindPath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;
  }): Observable<StrictHttpResponse<Array<UserWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params?: {
    filter?: any;
  }): Observable<Array<UserWithRelations>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserWithRelations>>) => r.body as Array<UserWithRelations>)
    );
  }

  /**
   * Path part for operation userControllerUpdateAll
   */
  static readonly UserControllerUpdateAllPath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(params?: {
    where?: any;
    body?: UserPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerUpdateAllPath, 'patch');
    if (params) {
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll(params?: {
    where?: any;
    body?: UserPartial
  }): Observable<LoopbackCount> {

    return this.updateAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
