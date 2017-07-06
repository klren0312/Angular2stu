import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { mainPageRoutes } from './main-page.routes';
import { MainPageComponent } from './main-page.component';
import { MainPageMonitorComponent } from './main-page-monitor/main-page-monitor.component';
import { EChartOptionDirective1 } from './main-page-monitor/echart-option.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(mainPageRoutes)
  ],
  declarations: [
    EChartOptionDirective1,
    MainPageComponent,
    MainPageMonitorComponent
  ]
})
export class MainPageModule { }
