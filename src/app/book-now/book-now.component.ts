import { Component, OnInit } from '@angular/core';
import { BusdetailsService } from '../bus-enquiry/services/busdetails.service';
import { busdetails } from '../bus-enquiry/models/busdetails';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  busDetails: busdetails | any;
  seatNo: number | any;

  constructor(private busdetailsService: BusdetailsService) {}

  ngOnInit() {
    this.busdetailsService.busDetails$.subscribe(busDetails => {
      this.busDetails = busDetails;
    });

    this.busdetailsService.seatNo$.subscribe(seatNo => {
      console.log(seatNo)
      this.seatNo = seatNo;
    });
  }

}
