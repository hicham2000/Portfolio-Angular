import {Component, ElementRef, ViewChild} from '@angular/core';
import {faEarthAfrica} from '@fortawesome/free-solid-svg-icons';
import {DropdownService} from "../dropdown.service";
import {state, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  faEarthAfrica = faEarthAfrica;

  @ViewChild('header') header!:ElementRef;

  valid:boolean=true;
  onclick(){




   //  let div= document.getElementById('header');
   //
   // // @ts-ignore
   //  this.valid ? div.classList.add("show"):div.classList.remove("show");
   //  this.valid = !this.valid;
  }

  constructor(private dropdown: DropdownService) {
  }

  onmove(){
    let div= document.getElementById('header');
    // @ts-ignore
    div.classList.remove("show");
    this.valid = !this.valid;

  }

  show:string='show';


}
