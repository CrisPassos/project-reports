import { Gateway } from './../shared/models/gateway.model';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { Project } from '../shared/models/project.model';
import { ReportService } from '../shared/services/report.service';

@Component({
  selector: 'app-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss'],
})
export class ReportHeaderComponent implements OnInit {
  project = new FormControl('');
  gateway = new FormControl('');
  from = new FormControl('');
  to = new FormControl('');

  @Input()
  allProjects$!: Observable<Project>;

  @Input()
  allGateways$!: Observable<Gateway>;

  @Output()
  model = new EventEmitter<any>();

  constructor(private service: ReportService) {}

  ngOnInit(): void {}

  onSave() {
    const body = {
      from: this.to.value ? moment(this.to.value).format('yyyy-MM-DD') : "",
      to: this.to.value ? moment(this.to.value).format('yyyy-MM-DD'): "",
      projectId: this.project.value?.projectId,
      gatewayId: this.gateway.value?.gatewayId,
    };

    this.service.postReport(body).subscribe(response => {
      this.model.emit({
        project: this.project?.value,
        gateway: this.gateway?.value,
        report: response.data,
        all: !this.project?.value?.projectId && !this.gateway?.value?.gatewayId,
      });
    })
  }


}
