import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { busdetails } from './models/busdetails';
import { HttpClient } from '@angular/common/http';
import { BusdetailsService } from './services/busdetails.service';
import { bus } from './models/bus';
import { Router } from '@angular/router';
import { BookNowComponent } from '../book-now/book-now.component';

@Component({
  selector: 'app-bus-enquiry',
  templateUrl: './bus-enquiry.component.html',
  styleUrls: ['./bus-enquiry.component.css']
})
export class BusEnquiryComponent {

  status: String | undefined;
  public successor: String | undefined;
  getSeat: Boolean = false;

  public busdetailsList: busdetails[] = [];
  busModel = new bus("chennai", "erode", "2024-01-17");
  constructor(private busdetailsService: BusdetailsService, private router: Router) { }

  getBuses() {
    this.getSeat = true;
    this.busdetailsService.getBuses(this.busModel)
      .subscribe(data =>
        this.busdetailsList = data)
  }

  viewSeats(busdetailsList: busdetails) {

    
    if (busdetailsList.viewSeatsText === "Hide Seats") {
      busdetailsList.viewSeatsText = "View Seats"
      busdetailsList.viewSeatsBoolean = false;
    } else {
      busdetailsList.viewSeatsText = "Hide Seats"
      busdetailsList.viewSeatsBoolean = true;
    }
  }

  bookSeats(busdetailsList: busdetails) {
    // alert("error");
    this.busdetailsService.setBusDetails(busdetailsList);
    this.router.navigate(['/bookNow']);
    }
    
}
