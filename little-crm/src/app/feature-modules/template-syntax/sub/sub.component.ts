import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'crm-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent  {

  @Input() item = '';
  @Output() addTwo = new EventEmitter();

  constructor() { }



  addValue() {
    this.addTwo.emit(2);
  }
}
