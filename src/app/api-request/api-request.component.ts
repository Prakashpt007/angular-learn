import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.scss']
})
export class ApiRequestComponent implements OnInit {
  Agriota:any;
  CropData:any;
  DrKrishi:any;
  KrishiCo:any;
  LatestNews:any;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.news()
  }

  news() {
    this.newsApiCall().subscribe(res => {
      this.Agriota  = res.Agriota;
      this.CropData  = res.CropData;
      this.DrKrishi  = res.DrKrishi;
      this.KrishiCo  = res.KrishiCo;
      this.LatestNews  = res.LatestNews;
    });
  }

    newsApiCall() {
    return this._http.get<any>(
      "https://api-ts.cropdata.in/cropdata-portal/site/news"
    );
  }
}
