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
   * Path part for operation apiCreateStudentPost
   */
  static readonly ApiCreateStudentPostPath = '/api/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentPost$Plain$Response(params?: {
    students?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPostPath, 'post');
    if (params) {
      rb.query('students', params.students, {});
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
   * This method doesn't expect any request body.
   */
  apiCreateStudentPost$Plain(params?: {
    students?: string;
  }): Observable<string> {

    return this.apiCreateStudentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateStudentPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateStudentPost$Json$Response(params?: {
    students?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CreateStudentService.ApiCreateStudentPostPath, 'post');
    if (params) {
      rb.query('students', params.students, {});
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
   * This method doesn't expect any request body.
   */
  apiCreateStudentPost$Json(params?: {
    students?: string;
  }): Observable<string> {

    return this.apiCreateStudentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
