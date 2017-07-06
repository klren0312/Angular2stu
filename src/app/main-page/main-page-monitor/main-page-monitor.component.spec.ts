import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMonitorComponent } from './main-page-monitor.component';

describe('MainPageMonitorComponent', () => {
  let component: MainPageMonitorComponent;
  let fixture: ComponentFixture<MainPageMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
