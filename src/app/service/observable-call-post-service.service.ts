import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../observable-call/observable-call.component';

@Injectable({
  providedIn: 'root',
})
export class ObservableCallPostServiceService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

  public getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
}
