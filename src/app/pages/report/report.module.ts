import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportMasterComponent } from './report-master/report-master.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportCardComponent } from './report-card/report-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReportHeaderComponent,
    ReportMasterComponent,
    ReportCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    ReportHeaderComponent,
    ReportMasterComponent
  ],
})
export class ReportModule { }
