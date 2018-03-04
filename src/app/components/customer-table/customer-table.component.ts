import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  customers:Object = [];

  // These are used for the start and finsh of the slice pipe for the customer JSON
  start:number = 0;
  finish:number = 10;

  // Select box
  optionSelected:string = '10';
  options:Array<number> = [10, 20, 30];

  // Pages
  customersAmount: number = 0;

  // The current selected index
  sIndex: number = null;

  @Output() emitCustomer = new EventEmitter<string>();

  // dataService injection
  constructor(private dataService: DataService) { }

  ngOnInit(){
    // Subscribe to the service which retrives the JSON file
    this.dataService.getJSON().subscribe((response) => {
      this.customers = response;
      this.customersAmount = response.length;
      
      // Send first customer object to be displayed
      this.emitCustomer.emit(response[0]);

      // Select first row

      this.sIndex = 0;
    });
  }

  // Set the index of the active table row
  setIndex(index: number) {
     this.sIndex = index;
  }

  // Emit the customer when the sendCutomer function is called
  sendCustomer(customer) {
    this.emitCustomer.emit(customer)
  }

  // When amount to show is selected update the slice vars
  onOptionsSelected(amount){
    this.finish = this.start + parseInt(amount);
  }

  // Change the current page 
  changePage(type){
    let displayed = parseInt(this.optionSelected);

    if(type === 'next'){
      if(this.finish < this.customersAmount){
        this.start = this.finish;
        this.finish = this.finish + displayed;
      }
    }
    else{
      if( ( this.start - displayed ) < 0){
        this.start = 0;
        this.finish = displayed;
      }
      else{
        this.start = this.start - displayed;
        this.finish = this.finish - displayed;
      }
    }
  }

}