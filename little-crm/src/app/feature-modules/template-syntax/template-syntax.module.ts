import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSyntaxPageComponent } from './template-syntax-page/template-syntax-page.component';
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";
import { SubComponent } from './sub/sub.component';
import {MaterialModule} from "../../material/material.module";



@NgModule({
  declarations: [
    TemplateSyntaxPageComponent,
    SubComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MaterialModule
  ]
})
export class TemplateSyntaxModule { }
