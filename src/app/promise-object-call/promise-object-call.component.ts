import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-object-call',
  templateUrl: './promise-object-call.component.html',
  styleUrls: ['./promise-object-call.component.scss'],
})
export class PromiseObjectCallComponent implements OnInit {
  name = 'Angular';
  apiUrl = 'https://www.techiediaries.com/api/data.json';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }
  private fetchData() {
    const promise = this.httpClient.get(this.apiUrl).toPromise();
    console.warn(promise);
    promise
      .then((data) => {
        console.log('Promise resolved with: ' + JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });
  }
}
