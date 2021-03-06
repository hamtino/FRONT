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

import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class CreateStudentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCreateStudentGet
   */
  static readonly ApiCreateStudentGetPath = '/api/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Student>>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Student>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentGet$Plain(params?: {
  }): Observable<Array<Student>> {

    return this.apiCreateStudentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Student>>) => r.body as Array<Student>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Student>>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Student>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentGet$Json(params?: {
  }): Observable<Array<Student>> {

    return this.apiCreateStudentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Student>>) => r.body as Array<Student>)
    );
  }

  /**
   * Path part for operation apiCreateStudentPut
   */
  static readonly ApiCreateStudentPutPath = '/api/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPut$Plain$Response(params?: {
    body?: Student
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPut$Plain(params?: {
    body?: Student
  }): Observable<string> {

    return this.apiCreateStudentPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPut$Json$Response(params?: {
    body?: Student
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPut$Json(params?: {
    body?: Student
  }): Observable<string> {

    return this.apiCreateStudentPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiCreateStudentPost
   */
  static readonly ApiCreateStudentPostPath = '/api/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPost$Plain$Response(params?: {
    body?: Student
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPost$Plain(params?: {
    body?: Student
  }): Observable<string> {

    return this.apiCreateStudentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPost$Json$Response(params?: {
    body?: Student
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCreateStudentPost$Json(params?: {
    body?: Student
  }): Observable<string> {

    return this.apiCreateStudentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiCreateStudentDelete
   */
  static readonly ApiCreateStudentDeletePath = '/api/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentDelete$Plain$Response(params?: {
    ID?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentDeletePath, 'delete');
    if (params) {
      rb.query('ID', params.ID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentDelete$Plain(params?: {
    ID?: number;
  }): Observable<string> {

    return this.apiCreateStudentDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentDelete$Json$Response(params?: {
    ID?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentDeletePath, 'delete');
    if (params) {
      rb.query('ID', params.ID, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreateStudentDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentDelete$Json(params?: {
    ID?: number;
  }): Observable<string> {

    return this.apiCreateStudentDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
