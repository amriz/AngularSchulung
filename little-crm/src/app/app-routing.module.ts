import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartPageComponent} from "./feature-modules/start-page/start-page/start-page.component";
import {NotFoundPageComponent} from "./feature-modules/default-pages/not-found-page/not-found-page.component";
import {TemplateSyntaxPageComponent} from "./feature-modules/template-syntax/template-syntax-page/template-syntax-page.component";
import {LegalNoticePageComponent} from "./feature-modules/legal/legal-notice-page/legal-notice-page.component";
import {LoginPageComponent} from "./feature-modules/auth/views/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'template-syntax',
    component: TemplateSyntaxPageComponent
  },
  {
    path: 'legal-notice',
    component: LegalNoticePageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
