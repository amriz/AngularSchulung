import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'crm-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent {

  customerForm = this.fb.group({
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
    private router: Router
    ) { }

  formSubmit() {
    const customer: Customer = this.customerForm.value;
    this.customerService.postCustomer(customer)
      .subscribe(() => this.router.navigateByUrl('/customers'))
  }
}
