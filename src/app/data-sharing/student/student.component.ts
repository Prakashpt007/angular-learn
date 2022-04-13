import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() myInputMsg!: string;

  @Input() parentMessageForChild! :string;

  @Output() myOutPut = new EventEmitter<string>();

  outputMessage:any= [
    {
      name:'Prakash',
      value: 22

    },
    {
          name:'Ujwal',
          value: 35

    }
    ]

  constructor() {

  }

  ngOnInit(): void {
     console.log(this.myInputMsg)
  }
  sendValues(){
    // this.myOutPut.emit(this.outputMessage);
    this.myOutPut.emit(this.outputMessage);
  }
}
