import { Component } from '@angular/core';
import {faEarthAfrica} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faEarthAfrica = faEarthAfrica;

  valid:boolean=true;
  onclick(){
    let div= document.getElementById('header');

   // @ts-ignore
    this.valid ? div.classList.add("show"):div.classList.remove("show");
    this.valid = !this.valid;
  }
}
