import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  @Input() image: string = 'https://www.gstatic.com/devrel-devsite/prod/v7101fe1ae309bf6f8b73931812f2304140fb851e33f225a68507501988007b93/developers/images/lockup-new.svg';
  @Input() name: string = 'Google for Developers';
  @Input() link: string = 'https://developers.google.com/';
}
