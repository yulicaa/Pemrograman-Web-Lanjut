import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  // getTitle(){
  //   return this.title;
  // Courses = [
  //   {id: 0, name: 'HTML'},
  //   {id: 1, name: 'PHP'},
  //   {id: 2, name: 'Angular'},
  //   {id: 3, name: 'C#'},
  //   {id: 4, name: 'VB.NET'},
  // ]
  Courses;

  constructor(private service:CoursesService) {
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }
  }
