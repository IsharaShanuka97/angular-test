import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private element : ElementRef) {
    element.nativeElement.style.color = 'red ';
   }


  @HostListener('mouseenter') setColorOnMouseEnter(){
    this.setColor("red");
  }

  @HostListener('mouseleave') setColorOnMouseLeave(){
    this.setColor("green");
  }
  private setColor(color:String) {
    this.element.nativeElement.style.color = color ;
  }
  

}


