import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxPipe } from './pipes/tax.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
    declarations: [
        TaxPipe,
        HighlightDirective
    ],
  exports: [
    TaxPipe,
    HighlightDirective
  ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
