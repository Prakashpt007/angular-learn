import { Component, OnInit } from '@angular/core';
import { StressService } from '../service/stress.service';

@Component({
  selector: 'app-http-get-request',
  templateUrl: './http-get-request.component.html',
  styleUrls: ['./http-get-request.component.scss'],
})
export class HttpGetRequestComponent implements OnInit {
  constructor(private getStreses: StressService) {}
  stressData: [{ Commodity: string; Phenophase: string; Stress: string }] = [
    {
      Commodity: '',
      Phenophase: '',
      Stress: '',
    },
  ];

  ngOnInit(): void {
    this.getStresApiCall();
  }

  getStresApiCall() {
    this.getStreses.getStreses().subscribe(
      (response) => {
        console.log(response);
        this.stressData = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
