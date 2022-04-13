import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  itemImageUrl :any  = 'https://png.pngitem.com/pimgs/s/185-1850003_sample-png-transparent-png.png'

  displayBox = false;

  inputValue:any = 'sample text'
  constructor() { }

  ngOnInit(): void {
  }
  append(){
    this.displayBox = !this.displayBox
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
