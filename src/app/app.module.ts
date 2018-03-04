import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { KeysPipe } from './pipes/keys.pipe';
import { GraphComponent } from './components/graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    CustomerInfoComponent,
    KeysPipe,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
