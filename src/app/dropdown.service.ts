import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  show = new Subject<boolean>();

  constructor() { }
}
