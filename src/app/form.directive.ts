import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appForm]'
})
export class FormDirective {

  constructor(private element:ElementRef) { }

  @HostListener('submit')
  onFormSubmit(){
    const invalidControl =this.element.nativeElement.querySelector('.ng-invalid');

    if(invalidControl){
      invalidControl.focus();
      invalidControl.value='Please Enter Here';
    }
  }

}
