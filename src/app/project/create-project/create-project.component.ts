import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProjectService} from '../../shared/project.service';
import {throwError} from 'rxjs';
import {CreateProjectPayload} from './create-project.payload';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createProjectForm: FormGroup;
  projectPayload: CreateProjectPayload;


  constructor(private router: Router, private projectService: ProjectService, private  authService: AuthService) {
    this.projectPayload = {
      projectName : '',
      userName : ''
    } ;
    this.projectPayload.userName = this.authService.getUserName();
  }

  ngOnInit() {
    this.createProjectForm = new FormGroup({
      projectName: new FormControl('', Validators.required),
    });
  }

  createProject() {
    this.projectPayload.projectName = this.createProjectForm.get('projectName').value;


    this.projectService.createProject(this.projectPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    });
  }

  discardProject() {
    this.router.navigateByUrl('/');
  }

}
