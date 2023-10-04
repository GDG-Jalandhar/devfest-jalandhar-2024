import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './components/partner/partner.component';



@NgModule({
  declarations: [
    PartnerComponent
  ],
  exports: [
    PartnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
