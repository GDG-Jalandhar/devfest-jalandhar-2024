import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-partners-page',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss'],
    standalone: false
})
export class PartnersComponent {
  constructor(private title: Title) {
    this.title.setTitle(
      'Partners and Sponsors | DevFest Jalandhar | Biggest Developer Conference in Jalandhar'
    );
  }
}
