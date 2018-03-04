import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// Services 
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app';

  customer: object = [];

  // Recive the customer send from the customer-table component
  receiveCustomer(customer) {
    this.customer = customer;
  }
}
