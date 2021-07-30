import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {empty, Observable, of, throwError} from 'rxjs';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OneCustomerResolver implements Resolve<Customer> {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Customer> {
    return this.customerService.getCustomer(route.params.id)
      .pipe(
        catchError(() => {
          this.router.navigateByUrl('/notfound');
          return of({} as Customer);
        })
      )
  }
}
