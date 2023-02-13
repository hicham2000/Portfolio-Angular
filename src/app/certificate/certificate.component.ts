import { Component } from '@angular/core';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  faArrowsLeftRightToLine=faRightToBracket;

}
