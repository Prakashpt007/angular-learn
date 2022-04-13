import { Component } from "@angular/core";
import { LoaderService } from "./loader.service";
@Component({
  selector: "loader",
  template: `
    <div *ngIf="show" class="loaderMask">
      loading
    </div>
  `,
  styles: [
    ".loaderMask{position: absolute; height: 100%; width: 100%; z-index: 1; background-color: rgba(100, 100, 100, 0.3);display: flex; align-items: center; justify-content: center; font-size: 24px;}"
  ]
})
export class LoaderComponent {
  show!: boolean;
  constructor(private _loaderService: LoaderService) {}

  ngOnInit() {
    this._loaderService.loadState.subscribe((res:any) => {
      this.show = res;
    });
  }
}
