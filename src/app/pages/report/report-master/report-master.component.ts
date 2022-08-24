import { Component, OnInit } from '@angular/core';
import { ReportService } from './../shared/services/report.service';

@Component({
  selector: 'app-report-master',
  templateUrl: './report-master.component.html',
  styleUrls: ['./report-master.component.scss']
})
export class ReportMasterComponent implements OnInit {
  model: any;

  allProjects$ = this.service.getProject();
  allGateways$ = this.service.getGateways();

  constructor(private service: ReportService) {}

  ngOnInit(): void {
  }

  onModelChange(item: Event) {
    this.model = item;
  }

}
