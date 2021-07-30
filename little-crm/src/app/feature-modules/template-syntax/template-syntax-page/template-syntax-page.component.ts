import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import { Roles } from 'src/app/core/model/roles';

@Component({
  selector: 'crm-template-syntax-page',
  templateUrl: './template-syntax-page.component.html',
  styleUrls: ['./template-syntax-page.component.scss']
})
export class TemplateSyntaxPageComponent {

  Roles = Roles;
  info = '3.34.5';
  title = 'Text';
  data = of([
    3,4,7
  ]);
  flag: boolean = false;
  role: Roles = Roles.Admin;
  list = [
    {
      id: 5
    },
    {
      id: 9
    }
  ]

  counter = 0;
  value = 'Name';

  constructor() { }


  add(n: number) {
    this.counter += n;
   /* debugger*/
  }

}
