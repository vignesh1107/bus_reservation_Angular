import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusEnquiryComponent } from './bus-enquiry/bus-enquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewSeatsComponent } from './view-seats/view-seats.component';
import { BookNowComponent } from './book-now/book-now.component';

@NgModule({
  declarations: [
    AppComponent,
    BusEnquiryComponent,
    ViewSeatsComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
