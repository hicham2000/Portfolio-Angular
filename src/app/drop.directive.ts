import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @HostBinding("class.open") isopen=false;

  @HostListener('document:click',['$event']) onclick(event:Event){
    // this.isopen=this.ele.nat
  }

  constructor() { }

}
