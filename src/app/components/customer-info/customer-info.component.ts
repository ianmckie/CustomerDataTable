import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {

  @Input() customer: Customer;

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      if(propName === 'customer'){

        this.customer = changes[propName].currentValue;
      }
    }
  }
}

export interface Customer {
  _id: string;
  name: string;
  accountNumber: string;
  country: string;
  registered: string;
  address: string;
  phone: string;
  email: string;
  favoriteFruit:string;
}

