import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../services/customer.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'crm-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  // DI
  public displayedColumns: string[] = ['id', 'name', 'volume', 'action'];
  public customers: Customer[] = [];
  public loading: boolean = false;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
   this.getCustomers();
  }

  delete(id: number) {
    this.loading = true;
    this.customerService.deleteCustomer(id)
      .subscribe(() => {
        this.getCustomers();
      },
        (errMsg) => {
        this.loading = false;
        alert(errMsg);
      })
  }

  getCustomers () {
    this.loading = true;
    this.customerService.getCustomers()
      .pipe(tap(() => this.loading = false))
      .subscribe(
        (customers: Customer[]) => {
          this.customers = customers;
        },
        (errMsg) => {
          alert(errMsg);
        })
  }
}
