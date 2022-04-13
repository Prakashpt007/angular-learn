import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit {
  @ViewChild('fondovalor')
  fondovalor!: ElementRef;
  valueInput: any;
  constructor() {}

  ngOnInit(): void {}

  getFotoFondo() {
    this.valueInput = this.fondovalor.nativeElement.value;
  }
}
