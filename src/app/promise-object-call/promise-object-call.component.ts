import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-object-call',
  templateUrl: './promise-object-call.component.html',
  styleUrls: ['./promise-object-call.component.scss'],
})
export class PromiseObjectCallComponent implements OnInit {
  name = 'Angular';
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  error = false;
  errorMessage = '';
  userData: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.fetchData();
  }
  fetchData() {
    const promise = this.httpClient.get(this.apiUrl).toPromise();
    promise
      .then((data) => {
        console.log('Promise resolved with: ' + JSON.stringify(data));
        // console.log(data);
        this.userData = data;
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
        console.log(error);
        if ((error.status = 404)) {
          this.error = true;
          this.errorMessage = 'Data Link Not found';
        }
      });
  }
}
