import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss'],
})
export class TemplateDrivenFromComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getDetails(values: string) {
    console.log(values);
  }
}
