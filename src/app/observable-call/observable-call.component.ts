import { Component, OnInit } from '@angular/core';
import { ObservableCallPostServiceService } from '../service/observable-call-post-service.service';
export class Post {
  constructor(
    public body: string,
    public id: number,
    public title: string,
    public userId: number
  ) {}
}
@Component({
  selector: 'app-observable-call',
  templateUrl: './observable-call.component.html',
  styleUrls: ['./observable-call.component.scss'],
})
export class ObservableCallComponent implements OnInit {
  name = 'Angular';

  posts = new Array<Post>();
  constructor(private service: ObservableCallPostServiceService) {}

  ngOnInit(): void {
    this.service.getPost().subscribe((response) => {
      this.posts = response.map((item) => {
        return new Post(item.body, item.id, item.title, item.userId);
      });
    });
  }
}
