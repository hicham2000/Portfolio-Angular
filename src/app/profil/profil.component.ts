import { Component } from '@angular/core';
import {faLinkedin,faGithub,faSquareFacebook,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faSquareEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  faLinkedin=faLinkedin;
  faSquareEnvelope=faSquareEnvelope;
  faGithub=faGithub;
  faSquareFacebook=faSquareFacebook;
  faSquareWhatsapp=faSquareWhatsapp;

}
