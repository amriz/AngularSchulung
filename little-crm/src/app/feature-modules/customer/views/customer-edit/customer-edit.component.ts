import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'crm-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm = this.fb.group({
    id: [],
    name: ['', [
      Validators.required,
      Validators.minLength(1)
    ]],
    volume: [undefined, [
      Validators.required,
      Validators.min(0)
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  formSubmit() {
    const customer: Customer = this.customerForm.value;
    this.customerService.putCustomer(customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customers');
      },
      (errMsg) => {
        alert(errMsg);
    })
  }

  ngOnInit(): void {
    const customer = this.activatedRoute.snapshot.data.customer;
    this.customerForm.patchValue(customer);

   /* const id = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(id)
      .subscribe((customer:Customer) => {
        this.customerForm.patchValue(customer);
      },
        (errMsg) => {
          alert(errMsg);
        })*/
  }



}
