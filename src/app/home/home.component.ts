import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../shared/project-model';
import {ProjectService} from '../shared/project.service';
import {AuthService} from '../auth/shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  project: Array<ProjectModel> = [];


  constructor(private authService: AuthService , private postService: ProjectService, private router: Router) {
    this.postService.getAllPostsByUser(authService.getUserName()).subscribe(project => {
      this.project = project;
      console.log(authService.getUserName());
    });
  }

  ngOnInit(): void {
  }
  goToCreateProject() {
    this.router.navigateByUrl('/create-project');
  }

}
