import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCallComponent } from './observable-call.component';

describe('ObservableCallComponent', () => {
  let component: ObservableCallComponent;
  let fixture: ComponentFixture<ObservableCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
