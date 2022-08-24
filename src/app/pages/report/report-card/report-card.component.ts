import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gateway } from '../shared/models/gateway.model';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
})
export class ReportCardComponent implements OnInit {
  @Input()
  model: any;

  @Input()
  allProjects$!: Observable<Project>;

  @Input()
  allGateways$!: Observable<Gateway>;

  fullReport$: any;

  constructor() {}

  ngOnInit(): void {
    this.getFullReport();
  }

  getFullReport(): void {
    const final = {
      project: {
        name: '',
        date: '',
        gateway: '',
        transactionId: '',
        amount: '',
      },
    };

    this.fullReport$ = this.allProjects$.pipe(
      map((projects) => {
        const lista: { name: string; date: any; gateway: any; transactionId: any; amount: any; }[] = [];

        return projects.data.map((project) => {
          debugger

          this.model?.report.map((report: any) => {
            if (report?.projectId === project?.projectId) {
              lista.push (

                {

                name: project.name,
                date: report.create,
                gateway: report.gatewayId,
                transactionId: report.paymentId,
                amount: report.amount,
              })
            }

          });


          return lista;
        });
      })
    );


  }
}
