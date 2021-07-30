import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {logout} from "../feature-modules/auth/store/actions/auth.actions";
import {isLoggedIn, isLoggedOut} from "../feature-modules/auth/store/selectors/auth.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'crm-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent {
  isLoggedIn$?: Observable<boolean>;
  isLoggedOut$?: Observable<boolean>;

    constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(isLoggedIn);
    this.isLoggedOut$ = this.store.select(isLoggedOut);
  }

  logout() {
    this.store.dispatch(logout());
  }
}
