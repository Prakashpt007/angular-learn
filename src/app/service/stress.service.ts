import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StressService {
  // envirApiUrl = environment.baseApiUrl;

  baseurl: string =
    'https://api-ts.cropdata.in/cropdata-portal/site/ticker/getCommodityWiseStress';

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.mesage}`;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.mesage}`;
      console.log('hi');
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  constructor(private http: HttpClient) {}

  getStreses(): Observable<any> {
    return this.http
      .get(this.baseurl)
      .pipe(retry(1), catchError(this.handleError));
  }
}
