import { Component, Input } from '@angular/core';
import { IPartner } from 'src/app/models';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  @Input() partner: IPartner;
}
