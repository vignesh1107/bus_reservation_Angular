import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusEnquiryComponent } from './bus-enquiry.component';

describe('BusEnquiryComponent', () => {
  let component: BusEnquiryComponent;
  let fixture: ComponentFixture<BusEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusEnquiryComponent]
    });
    fixture = TestBed.createComponent(BusEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
