import { Component } from '@angular/core';
import { BusdetailsService } from '../bus-enquiry/services/busdetails.service';

@Component({
  selector: 'app-view-seats',
  templateUrl: './view-seats.component.html',
  styleUrls: ['./view-seats.component.css']
})
export class ViewSeatsComponent {

  ImagePath = new Array();
  isSeatSelected: string = "seat";
  rows = new Array(14);
  cols = new Array(10);

  constructor(private busService: BusdetailsService) {
    //image location 
     for(let i=0; i < this.rows.length; i++){
      this.ImagePath[i] = '/assets/images/display.png'
     }
    
  }

  isSeatselected(row: number) {
    console.log(row)
    if (this.ImagePath[row] === "/assets/images/display.png") {
      this.ImagePath[row] = '/assets/images/black.png';
    } else {
      this.ImagePath[row] = '/assets/images/display.png';
    }
    this.busService.setSeatNo(row)
  }
}