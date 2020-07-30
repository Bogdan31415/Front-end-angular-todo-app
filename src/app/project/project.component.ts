 import {Component, Input, OnInit} from '@angular/core';
 import {ProjectModel} from '../shared/project-model';
 import {Router} from '@angular/router';
 import { faComments } from '@fortawesome/free-solid-svg-icons';


 @Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  faComments = faComments;
  @Input() projects: ProjectModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProject(id: number): void {
    this.router.navigateByUrl('/view-project/' + id);
  }

   goToCreateProject() {
     this.router.navigateByUrl('/create-project');
   }

}
