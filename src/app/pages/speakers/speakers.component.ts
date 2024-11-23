import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-speaker-page',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
    standalone: false
})
export class SpeakersComponent {
  constructor(private title: Title) {
    this.title.setTitle(
      'Speakers | DevFest Jalandhar | Biggest Developer Conference in Jalandhar'
    );
  }
}
