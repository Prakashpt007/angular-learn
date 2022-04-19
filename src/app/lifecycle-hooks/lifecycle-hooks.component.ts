import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
})
export class LifecycleHooksComponent implements OnInit {
  constructorCall = false;

  ngOnChangesCall = false;
  ngOnInitCall = false;
  ngDoCheckCall = false;

  ngAfterContentInitCall = false;
  ngAfterContentCheckedCall = false;

  ngAfterViewInitCall = false;
  ngAfterViewCheckedCall = false;

  ngOnDestroyCall = false;

  // Constructor();
  // ngOnChanges();
  // ngOnInit();
  // ngDoCheck();
  // ngAfterContentInit();
  // ngAfterContentChecked();
  // ngAfterViewInit();
  // ngAfterViewChecked();
  // ngOnDestroy();

  //Constructor();
  constructor() {
    this.constructorCall = true;
    console.warn('constructor() call');
  }

  // ngOnChanges();
  ngOnChanges() {
    this.ngOnChangesCall = true;
    console.warn('ngOnChanges() call');
  }

  // ngOnInit();
  ngOnInit(): void {
    this.ngOnInitCall = true;
    console.warn('ngOnInit() call');
  }

  // ngDoCheck();
  ngDoCheck() {
    this.ngDoCheckCall = true;
    console.warn('ngDoCheck() call');
  }

  // ngAfterContentInit();
  ngAfterContentInit() {
    this.ngAfterContentInitCall = true;
    console.warn('ngAfterContentInit() call');
  }

  // ngAfterContentChecked();
  ngAfterContentChecked() {
    this.ngAfterContentCheckedCall = true;
    console.warn('ngAfterContentChecked() call');
  }

  // ngAfterViewInit();
  ngAfterViewInit() {
    this.ngAfterViewInitCall = true;
    console.warn('ngAfterViewInit() call');
  }

  // ngAfterViewChecked();
  ngAfterViewChecked() {
    this.ngAfterViewCheckedCall = true;
    console.warn('ngAfterViewChecked() call');
  }

  // ngOnDestroy();
  ngOnDestroy() {
    this.ngOnDestroyCall = true;
    console.warn('ngOnDestroy() call');
  }
}
