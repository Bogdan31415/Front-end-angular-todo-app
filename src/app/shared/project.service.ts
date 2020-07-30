import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from './project-model';
import {CreateProjectComponent} from '../project/create-project/create-project.component';
import {CreateProjectPayload} from '../project/create-project/create-project.payload';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getAllProject(): Observable<Array<ProjectModel>> {
    return this.http.get<Array<ProjectModel>>('http://localhost:8080/api/project/');
  }

  createProject(projectPayload: CreateProjectPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/project/', projectPayload, { responseType: 'text' });
  }

  getProject(id: number): Observable<ProjectModel> {
    return this.http.get<ProjectModel>('http://localhost:8080/api/project/' + id);
  }

  getAllPostsByUser(name: string): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>('http://localhost:8080/api/project/by-user/' + name);
  }
}
