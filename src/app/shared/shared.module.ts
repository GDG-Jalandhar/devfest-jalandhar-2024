import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './components/partner/partner.component';
import { PersonComponent } from './components/person/person.component';



@NgModule({
  declarations: [
    PartnerComponent,
    PersonComponent
  ],
  exports: [
    PartnerComponent,
    PersonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
