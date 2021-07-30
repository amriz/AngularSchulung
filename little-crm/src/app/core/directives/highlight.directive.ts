import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[crmHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('crmHighlight') color?: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('alert');
    this.el.nativeElement.classList.add('alert-info');
    this.el.nativeElement.style.color = this.color;
  }

}
