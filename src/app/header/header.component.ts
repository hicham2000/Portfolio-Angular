import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  valid:boolean=true;
  onclick(){
    let div= document.getElementById('header');

   // @ts-ignore
    this.valid ? div.classList.add("show"):div.classList.remove("show");
    this.valid = !this.valid;
  }
}
