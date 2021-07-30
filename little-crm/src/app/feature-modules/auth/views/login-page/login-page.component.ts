import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthService} from "../../services/auth.service";
import {tap} from "rxjs/operators";
import {User} from "../../model/user";
import {login} from "../../store/actions/auth.actions";
import {noop, Observable} from "rxjs";
import {Router} from "@angular/router";
import {isLoggedIn, isLoggedOut} from "../../store/selectors/auth.selectors";

@Component({
  selector: 'crm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {



  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store) {

    this.form = fb.group({
      email: ['test-user', [Validators.required]],
      password: ['test-password', [Validators.required]]
    });
  }



  login() {
    console.log('ok');
    const {email, password} = this.form.value;
    this.auth.login(email, password)
     .pipe(
       tap((user : User) => {
         this.store.dispatch(login({user}))
         this.router.navigateByUrl('/customers')
       })
     )
      .subscribe(
        noop,
        () => {
          alert('Login Failed');
        }
      )

  }
}
