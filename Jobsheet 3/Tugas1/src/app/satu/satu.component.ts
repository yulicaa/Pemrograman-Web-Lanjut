import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satu',
  templateUrl: './satu.component.html',
  styleUrls: ['./satu.component.css']
})
export class SatuComponent implements OnInit {

  title = 'ANGULAR';
  tiga = "3 Author";
  tigaa = ['Author1','Author2','Author3']
  
  getTigaa(){
  return this.tiga;
  }
  constructor() { }

  ngOnInit() {
  }

}
