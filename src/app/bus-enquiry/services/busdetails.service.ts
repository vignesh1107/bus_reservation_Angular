import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { busdetails } from '../models/busdetails';
import { BehaviorSubject, Observable } from 'rxjs';
import { bus } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class BusdetailsService {
  private seatNo = new BehaviorSubject<any>({});
  public seatNo$: Observable<any> = this.seatNo.asObservable();
  private busDetailsSubject = new BehaviorSubject<any>({});
  public busDetails$: Observable<any> = this.busDetailsSubject.asObservable();

  setBusDetails(busDetails: any) {
    this.busDetailsSubject.next(busDetails);
  }

  setSeatNo(row: number) {
    this.seatNo.next(row);
  }

  constructor(private http: HttpClient) { }
  public _url : string | undefined;

  getBuses(busModel: bus) : Observable<busdetails[]>{
    this._url = 'http://localhost:8080/busEnquiry';
    const params = new HttpParams()
      .set('source', busModel.source)
      .set('destination', busModel.destination)
      .set('travelDate', busModel.travelDate);
    return this.http.get<busdetails[]>(`${this._url}`, { params });

  }

  bookingDetails(){

  }
}
