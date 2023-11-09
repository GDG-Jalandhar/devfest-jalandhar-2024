import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team-page',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  constructor(private title: Title) {
    this.title.setTitle(
      'Our Team | DevFest Jalandhar | Biggest Developer Conference in Jalandhar'
    );
  }
}
