import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { Gateway } from '../models/gateway.model';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get('http://178.63.13.157:8090/mock-api/api/users');
  }

  getProject(): Observable<Project> {
    return this.http.get('http://178.63.13.157:8090/mock-api/api/projects').pipe(
      map(response => response as Project)
    );
  }

  getGateways(): Observable<Gateway> {
    return this.http.get('http://178.63.13.157:8090/mock-api/api/gateways').pipe(
      map(response => response as Gateway)
    );
  }

  postReport(body: {from: string, to: string, projectId: string, gatewayId: string}): Observable<Report> {
    return this.http.post('http://178.63.13.157:8090/mock-api/api/report', body).pipe(
      map(response => response as Report)
    );
  }
}
