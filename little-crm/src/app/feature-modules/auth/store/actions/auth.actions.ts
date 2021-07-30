import { createAction, props } from '@ngrx/store';
import {User} from "../../model/user";

export const logout = createAction(
  '[NavigationMain] logout'
);

export const login = createAction(
  '[Login Page] login',
  props<{ user: User }>()
);
