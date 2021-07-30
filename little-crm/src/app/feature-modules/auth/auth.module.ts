import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//import { AuthEffects } from './store/effects/auth.effects';
import { LoginPageComponent } from './views/login-page/login-page.component';
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {StoreModule} from "@ngrx/store";
import {authRecducer} from "./store/reducers/auth.reducer";
import {AuthEffects} from "./store/effects/auth.effects";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', authRecducer)
  ]
})
export class AuthModule { }
