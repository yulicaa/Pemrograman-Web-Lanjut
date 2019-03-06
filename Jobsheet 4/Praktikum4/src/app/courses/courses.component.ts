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
  
  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  nama = 'yuli';

  getTitle() {
    return this.title;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("button sudah diklik",$event)
  }

  onDivClick($event) {
    console.log("ini method div",$event)
  }

  // onKeyUp() {
  //   console.log("enter was pressed");
  // }

  // onKeyUp(nama) {
  //     console.log(nama);
  //   }

    onKeyUp() {
      console.log(this.nama);
    }

  constructor(private service:CoursesService) {
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }
  }
