import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-student',
  templateUrl: './parent-student.component.html',
  styleUrls: ['./parent-student.component.scss']
})
export class ParentStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myInputmessage : string = 'I am coming from Parent Component';

  outputFromChild:any

  GetChildData(value:any){
   console.log(value);
   this.outputFromChild = value
  }

}
