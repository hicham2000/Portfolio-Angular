import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input() header!:HTMLDivElement;

  open:boolean=false;
  constructor(private  element:ElementRef,private renderer: Renderer2) { }

  removeclass(){
    this.renderer.addClass(this.element.nativeElement,'collapsed');
    this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded','false');

    this.header.setAttribute('class','collapse navbar-collapse');
    this.open=!this.open;
  }
  @HostListener('click') onclick(){
    // this.isopen=this.ele.nat

    if(!this.open){

      this.renderer.removeClass(this.element.nativeElement,'collapsed');
      this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded','true');

      this.header.setAttribute('class','show collapse navbar-collapse');
      this.open=!this.open;

    }

    else{
      this.removeclass();

    }
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(targetElement:any) {
    const clickedInside = this.element.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.removeclass();
    }
  }

}
