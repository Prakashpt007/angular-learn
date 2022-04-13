import { Component, OnInit } from '@angular/core';
import { Observable, observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  birthday = new Date(1987, 6, 18); // June 18, 1987

  celcius: any;
  fahrenhit: any;

  defineFileSize: number = 0;
  constructor() {
    console.log('constructor call');
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
  }

  jsonExample = { name: 'prakash', email: 'prakash.patil@gmail.com', age: 29 };

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
