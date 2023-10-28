import { Component } from '@angular/core';
import {
  COMMUNITY_PARTNERS,
  MEDIA_PARTNERS,
  VENUE_PARTNERS,
} from 'src/app/consts';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  googleForDevelopers = {
    image:
      'https://www.gstatic.com/devrel-devsite/prod/v7101fe1ae309bf6f8b73931812f2304140fb851e33f225a68507501988007b93/developers/images/lockup-new.svg',
    name: 'Google for Developers',
    link: 'https://developers.google.com/',
    addName: false,
  };

  communityPartners = COMMUNITY_PARTNERS;

  venuePartners = VENUE_PARTNERS;

  mediaPartners = MEDIA_PARTNERS;
}
