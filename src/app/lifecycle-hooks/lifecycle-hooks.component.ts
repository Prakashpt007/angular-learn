import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {


  @Input() parentData: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeFromChild(){
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
