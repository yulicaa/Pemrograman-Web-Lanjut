import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format')format;
  @Input('appInputFormat')format;

  constructor(private el:ElementRef) { }
  @HostListener('blur') onblur(){
    // console.log("onBlur")

    let value:string = this.el.nativeElement.value;
    if (this.format=='lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
    
  }

  // @HostListener('focus') onfocus(){
  //   console.log("onFocus");
  // }

  // @HostListener('blur') onblurr(){
  //   console.log("onBlur");
  // }
  

}
