import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap} from 'rxjs/operators';


import * as AuthActions from '../actions/auth.actions';
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {

  logout$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(AuthActions.logout),
          tap(action => {
             this.router.navigateByUrl('/login');
          })
        )}
    , {dispatch: false});


  constructor(private actions$: Actions, private router: Router) {}

}
