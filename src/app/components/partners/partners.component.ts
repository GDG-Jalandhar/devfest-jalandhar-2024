import { Component } from '@angular/core';
import {
  COMMUNITY_PARTNERS,
  MEDIA_PARTNERS,
  SPONSORS,
  TICKETING_PARTNERS,
  VENUE_PARTNERS,
} from 'src/app/consts';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  standalone: false,
})
export class PartnersComponent {
  googleForDevelopers = {
    image:
      'https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/developers/images/lockup-new.svg',
    name: 'Google for Developers',
    link: 'https://developers.google.com/',
    addName: false,
  };

  communityPartners = COMMUNITY_PARTNERS;
  sponsors = SPONSORS;

  venuePartners = VENUE_PARTNERS;

  mediaPartners = MEDIA_PARTNERS;

  ticketingPartners = TICKETING_PARTNERS;
}
