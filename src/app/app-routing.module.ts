import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { BusEnquiryComponent } from './bus-enquiry/bus-enquiry.component';

const routes: Routes = [
  { path: '', redirectTo: 'busEnquiry', pathMatch: 'full'},
  { path: 'busEnquiry', component: BusEnquiryComponent},
  { path: 'bookNow', component: BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
