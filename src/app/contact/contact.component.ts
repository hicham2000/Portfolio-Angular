import { Component } from '@angular/core';

import {faCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  faCheck=faCheck;
  faCircleXmark=faCircleXmark;

  sent:boolean=false;

  onsubmit(input:any){
    this.sent=true;
    timer(3000).subscribe(x => { this.sent=false })
    input.reset();


  }

}
