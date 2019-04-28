import { Component, OnInit, Input } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// export class ContactComponent implements OnInit {
//   @Input() nama:string;
//   @Input() comment:string;

//   constructor() { }

//   ngOnInit() {
//   }
// }

export class ContactComponent {
  contactMethods =[
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
  ]
  
  log(z) {
    console.log(z);
  }

  submit(form){
    console.log(form);
    form.valid;
  }

}