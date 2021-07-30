import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Customer} from "../model/customer";
import {Observable, throwError} from "rxjs";
import {catchError, retry, tap} from "rxjs/operators";

const baseUrl = environment.apiUrl + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseUrl)
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(baseUrl + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  putCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<any>(baseUrl + customer.id, customer)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(baseUrl + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<any>(baseUrl, customer)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(err: any) {
    return throwError(err.message)
  }
}
