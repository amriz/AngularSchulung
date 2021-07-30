import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';
import {MaterialModule} from "./material/material.module";
import {DefaultPagesModule} from "./feature-modules/default-pages/default-pages.module";
import {LegalModule} from "./feature-modules/legal/legal.module";
import {StartPageModule} from "./feature-modules/start-page/start-page.module";
import {TemplateSyntaxModule} from "./feature-modules/template-syntax/template-syntax.module";
import {CoreModule} from "./core/core.module";
import {CustomerModule} from "./feature-modules/customer/customer.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {AuthModule} from "./feature-modules/auth/auth.module";

@NgModule({
  declarations: [
    // View Classes
    AppComponent,
    NavigationMainComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    // 3rd party
    BrowserAnimationsModule,

    // Shared
    MaterialModule,
    CoreModule,

    // Feature
    DefaultPagesModule,
    LegalModule,
    StartPageModule,
    TemplateSyntaxModule,
    AuthModule,

    CustomerModule,

    // Basic Routing
    AppRoutingModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
